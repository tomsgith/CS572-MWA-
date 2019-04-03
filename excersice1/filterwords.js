(function(){
    String.prototype.filterWords= function (a) {
       // var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
        
        var regex  = new RegExp(a.toString().replace(/,/g, '|'), 'gi');
        
        return this.replace(regex, '***');
        
        
    };
    //using ES6
    const sentence = "This house is ugly and dirty! baad!";
    console.log(sentence.filterWords(['ugly', 'dirty']));

    //using promise
    function filterStringWords2(statement, badWords) {
        return new Promise(function (resolve, reject) {
          const result = statement.filterWords(badWords);
          resolve(result);
        })
          .then(function (data) {
            console.log(data); 
          });
      }
      filterStringWords2(sentence, ['house', 'nice']);

      //async/await
      async function filterStringWords3(statement, badWords) {
        try {
          const result = await statement.filterWords(badWords);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      }
      filterStringWords3('This house is nice and i hate it!', ['house', 'hate']);

      //using observables
      const { Observable } = require('rxjs');
      function filterStringWords4(statement, badWords) {
        return Observable.create(function(observer){
          const result = statement.filterWords(badWords);
          observer.next(result);
          observer.complete();
        });
      
      }

      const observable = filterStringWords4('This house is nice!', ['house', 'is']);
      observable.subscribe((data) => {
      console.log(data);
      });
      




    
})();