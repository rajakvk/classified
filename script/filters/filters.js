// Filter skeleton 
taClassified.filter('capitalise', function(){
	return function(str) {
		if(typeof str != 'string') return;
		return str.toUpperCase();
	}
});

// {{ ads | pluralise: {sing: 'ad', plu:'ads'}}}
taClassified.filter('pluralise', function(){
	return function(count, noun) {
		if( !noun.sing || !noun.plu ) return;
		return count > 0 ? noun.plu : noun.sing;
	}
});