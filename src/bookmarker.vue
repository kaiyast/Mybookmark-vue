<template>
    <div >

        <div class="jumbotron">
            <h2>Bookmark Your Favorite Sites</h2>
            <div id="myForm">
                <div class="form-group">
                    <label>Site Name</label>
                    <input type="text" v-model="Ibookmark.name" class="form-control" placeholder="Website Name">
                </div>
                <div class="form-group">
                    <label>Site URL</label>
                    <input type="text" v-model="Ibookmark.url" class="form-control" placeholder="Website URL">
                </div>
                <button @click="submitBookmark" class="btn btn-primary">Submit</button>
            </div>
        </div>

        <div class="row marketing">
            <div class="col-lg-12">
                <div v-for="bookmark in bookmarks" :key="bookmark.name" class="well">

                    <h3>{{bookmark.name}}
                        
                        <a class="btn btn-default" target="_blank" :href="bookmark.url">Visit</a>
                        <a @click="deleteBookmark(bookmark)" class="btn btn-danger" >Delete</a>
                    </h3>
                </div>

            </div>

        </div>

        <footer class="footer">
            <p>&copy; 2016 Bookmarker, Inc.</p>
        </footer>

    </div>
    <!-- /container -->
</template>

<script>
export default {
    data() {
        return {
            Ibookmark: {
                name: '',
                url: ''
            },
            bookmarks: []
        }
    },
    methods: {
        submitBookmark() {


            this.$http.post('https://mumu-project.firebaseio.com/Bookmark.json', this.Ibookmark)
                .then(response => {         // define how to deal with the response
                    console.log(response);
                    this.fetchData()
                    this.resetbookmark();
                }, error => {               // define how to deal with error
                    console.log(error);
                     this.resetbookmark();
                });


        },

        deleteBookmark(bookmark) {
            this.$http.delete('https://mumu-project.firebaseio.com/Bookmark/'+bookmark.key+'.json', this.Ibookmark)
                .then(response => {         // define how to deal with the response
                    console.log(response);
                    this.fetchData()
                    this.resetbookmark();

                }, error => {               // define how to deal with error
                    console.log(error);
                     this.resetbookmark();
                });

                 
        },
        resetbookmark(){
            this.Ibookmark.name = "";
            this.Ibookmark.url = "";
        },
        fetchData() {

            this.$http.get('https://mumu-project.firebaseio.com/Bookmark.json')
                .then(response => {
                    return response.json();           // return an a javascript object
                })
                .then(data => {   
                    console.log(data)                  // define what to do with the returned javascript object
                    const resultArray = [];
                    for (let key in data) {
                        data[key].key = key
                        resultArray.push(data[key]);
                    }
                    this.bookmarks = resultArray;         // trigger Vue.js to update the DOM
                    console.log(this.bookmarks)
                });
        }
    }, created() {
        this.fetchData()
    }
}
</script>

<style>

</style>
