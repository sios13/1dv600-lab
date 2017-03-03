
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Books Resource", function () {

    describe("GET /api/books", function () {

        it("respond with books", function (done) {

            var test = function (error, res) {
                return {answer: "pong"};
            };

            request(app)
                .get('/api/books')
                .set('Accept', 'application/json')
                .expect(200, [{"$":{"id":"1"},"author":["Isaac Asimov"],"title":["Foundation"],"genre":["Science Ficition"],"price":["164"],"publish_date":["1951-08-21"],"description":["Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire."],"id":"1","publishDate":["1951-08-21"]},{"$":{"id":"2"},"author":["Isaac Asimov"],"title":["Foundation and Empire"],"genre":["Science Ficition"],"price":["79"],"publish_date":["1952-10-12"],"description":["Foundation and Empire is a novel written by Isaac Asimov that was published by Gnome Press in 1952. It is the second book published in the Foundation Series, and the fourth in the in-universe chronology. It takes place in two halves, originally published as separate novellas. The second part, The Mule, won a Hugo Award."],"id":"2","publishDate":["1952-10-12"]},{"$":{"id":"3"},"author":["Isaac Asimov"],"title":["Second Foundation"],"genre":["Science Fiction"],"price":["79"],"publish_date":["1953-05-10"],"description":["Second Foundation consists of two previously published novellas originally published in appearing in Astounding Magazine (with different titles) between 1948 and 1950, making this the third volume in Asimovs Foundation series. Decades later, Asimov wrote two further sequel novels and two prequels. Later writers have added authorized tales to the series. The Foundation series is often regarded as one of Isaac Asimovs best works, along with his Robot series."],"id":"3","publishDate":["1953-05-10"]},{"$":{"id":"4"},"author":["Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John"],"title":["Design Patterns: Elements of Reusable Object-Oriented Software"],"genre":["Computer Science"],"price":["350"],"publish_date":["1994-10-21"],"description":["Design Patterns: Elements of Reusable Object-Oriented Software is a software engineering book describing recurring solutions to common problems in software design. The books authors are Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides with a foreword by Grady Booch. The book is divided into two parts, with the first two chapters exploring the capabilities and pitfalls of object-oriented programming, and the remaining chapters describing 23 classic software design patterns. The book includes examples in C++ and Smalltalk."],"id":"4","publishDate":["1994-10-21"]},{"$":{"id":"5"},"author":["Alice in Wonderland"],"title":["Lewis Carroll"],"genre":["Literary nonsense"],"price":["99"],"publish_date":["1865-11-26"],"description":["Alice in Wonderland tells of a girl named Alice falling through a rabbit hole into a fantasy world populated by peculiar, anthropomorphic creatures. The tale plays with logic, giving the story lasting popularity with adults as well as with children. It is considered to be one of the best examples of the literary nonsense genre. Its narrative course and structure, characters and imagery have been enormously influential in both popular culture and literature, especially in the fantasy genre."],"id":"5","publishDate":["1865-11-26"]},{"$":{"id":"6"},"author":["Astrid Lindgren"],"title":["Ronia the Robbers Daughter"],"genre":["Fantasy"],"price":["79"],"publish_date":["1981-04-23"],"description":["Ronia is a girl growing up among a clan of robbers living in a castle in the woodlands of early-Medieval Scandinavia. As the only child of Matt, the chief, she is expected to become the leader of the clan someday. Their castle, Matts Fort, is split in two parts by a lightning bolt on the day of Ronias birth. Ronia grows up with Matts clan of robbers as her only company, until a rival robber group led by Borka moves into the other half of the castle, exacerbating the longstanding rivalry between the two bands."],"id":"6","publishDate":["1981-04-23"]},{"$":{"id":"7"},"author":["Dan Brown"],"title":["The Da Vinci Code"],"genre":["Mystery"],"price":["139"],"publish_date":["2003-04-02"],"description":["The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris, when they become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ having been married to Mary Magdalene. The title of the novel refers, among other things, to the finding of the first murder victim in the Grand Gallery of the Louvre, naked and posed like Leonardo da Vincis famous drawing, the Vitruvian Man, with a cryptic message written beside his body and a pentagram drawn on his chest in his own blood."],"id":"7","publishDate":["2003-04-02"]},{"$":{"id":"8"},"author":["Margaret Mitchell"],"title":["Gone with the Wind"],"genre":["Romance"],"price":["93"],"publish_date":["1936-06-10"],"description":["Gone with the Wind is a novel written by Margaret Mitchell, first published in 1936. The story is set in Clayton County, Georgia, and Atlanta during the American Civil War and Reconstruction era. It depicts the struggles of young Scarlett OHara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of the poverty she finds herself in after Shermans March to the Sea. A historical novel, the story is a Bildungsroman or coming-of-age story, with the title taken from a poem written by Ernest Dowson."],"id":"8","publishDate":["1936-06-10"]},{"$":{"id":"9"},"author":["Napoleon Hill"],"title":["Think and Grow Rich"],"genre":["Personal Development"],"price":["124"],"publish_date":["1937-11-12"],"description":[""],"id":"9","publishDate":["1937-11-12"]}], done);

        });
    });
});
