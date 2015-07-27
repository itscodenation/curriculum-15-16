$(function() {
    
    var voices;

    /*
     * Task 1: Populate the drop down with available voices from the speech
     * synthesis API
     */
    speechSynthesis.onvoiceschanged = function() {
    };
   
    /*
     * Task 2: Take a string 'text' and a type of voice and have the browser
     *         speak that text in that voice.
     */
    function say (text, voice) {
    }
   
    /*
     * Task 3: When the button is clicked call the say function with the text
     *         from the the translateTo text area.
     */
    $('#speak-btn').click(function (event) {
    });

   
    /*
     * Task 4: Look up available languages to translate to here: 
     *  https://msdn.microsoft.com/en-us/library/hh456380.aspx
     *  
     *  Create an array of maps in variable langs that stores the code and full name of each
     *  language. Add at least 5 languages (excluding english). 
     *  
     *  Then iterate through the array and add an <option></option>
     *  tag for each language nested in the <select></select> tags with id 'langs'.
     *  Set the attribute 'data-lang-code' with the language code and inside the
     *  <option> tags set the language name.
     *
     *  For example, for French the option tag should look like this:
     *  
     *  <option data-lang-code="fr">French</option>
     *  
     */
    var langs = [];
   
    
    /*
     * Task 5: Implement getAuthToken to perform a GET request on url '/token'.
     * This url will return a map with a token.  Take the 'access_token' from
     * the map and then call the tokenHandler function with it as a parameter.
     */
    function getAuthToken(tokenHandler) {
    }
   
    /*
     * Task 6: Translate is a function that takes the following parameters:
     *   text - The string that you will be translating.
     *   from - language code you will translate from (this is the langage of 'text').
     *   to   - language code you will translate to
     *   authToken - a valid Microsoft access token returned via getAuthToken.
     *   handler - the function you will pass the translation of text too.
     *
     * You must implement translate function to take 'text' and translate it to
     * the language specified by 'to'.  This will be done by calling the the
     * '/translate' api endpoin with the correct parameters.  You must set
     *  the Authorization header with the correct authToken as well.
     *
     */
    function translate(text, from, to, authToken, handler) {
    }
   
    /*
     * Task 7: Use getAuthToken and translate, impelmented above, to translate
     * text from the 'transateFrom' text area into the 'translateTo' text area.
     * The language you are translating to is whichever option is selected via
     * the 'langs' dropdown.
     */
    $("#translate-btn").click(function(event) {
    })
    

});