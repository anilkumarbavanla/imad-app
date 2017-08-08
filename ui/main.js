console.log('Loaded!');

var button=document.getElementById('counter');
    button.onlcik = funtcion() {
    
        
        var request = new XMLHttpRequest();

        request.onreadystatechange = function(){
                if(request.readyState === XMLHttpRequest.Done ) {
                 if(request.status === 200){
                        var counter = request.responsText;
                        var span =document.getElementById('count');
                        span.innerHTML = counter.toString();
                    }
                }
            
        };
        request.open('GET','http://bavanlaanilkumar007.imad.hasura-app.io/',true);
        request.send(null);
    };