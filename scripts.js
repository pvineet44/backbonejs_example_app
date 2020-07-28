// Backbone Model

var Blog = Backbone.Model.extend({
    defaults: {
        author: '',
        title: '',
        url: ''
    }
})

// Backbone Collection -- Array of models

var Blogs = Backbone.Collection.extend({});


//Instantiate two blogs

var blog1 = new Blog({
    author: 'Narendra',
    title: 'Modi\'s blog',
    url : 'http://namo.in'
});


var blog2 = new Blog({
    author: 'Amit',
    title: 'Mota bhai\'s blog',
    url : 'http://bjp.in'
});

var blogs = new Blogs([blog1, blog2]);