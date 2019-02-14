import React from "react";

/*
    File name: Form.js
    Author: Chrystian Rafael Sanches dos Santos
    Date: September 28, 2018
    Description: Class Form deals with the drop down menu and the button. Our "getDogs" event in the App.js will be called when
                 the form registers a "submit" attempt from the user, so it will trigger the function as it will have access to the value
                 on the drop down menu. Again, we are returning one form, therefore, let's make it simple.
 */

const Form = props => (
    <form onSubmit={props.getDogs}>
        <div id={"form-div"}>
            {
                // "Name" here is going to talk to the App.js saying "Hey bud, we have something in common, take this" and it passes the value entered.
            }
            <select name={"dogBreed"} id="dog-selector">
                <option value="select">SELECT YOUR DOG</option>
                <option value="affenpinscher">AFFENPINSCHER</option>
                <option value="african">AFRICAN</option>
                <option value="airedale">AIREDALE</option>
                <option value="akita">AKITA</option>
                <option value="appenzeller">APPENZELLER</option>
                <option value="basenji">BASENJI</option>
                <option value="beagle">BEAGLE</option>
                <option value="bluetick">BLUETICK</option>
                <option value="borzoi">BORZOI</option>
                <option value="bouvier">BOUVIER</option>
                <option value="boxer">BOXER</option>
                <option value="brabancon">BRABANCON</option>
                <option value="briard">BRIARD</option>
                <option value="bulldog-boston">BULLDOG (BOSTON)</option>
                <option value="bulldog-french">BULLDOG (FRENCH)</option>
                <option value="bullterrier-staffordshire">BULLTERRIER (STAFFORDSHIRE)</option>
                <option value="cairn">CAIRN</option>
                <option value="cattledog-australian">CATTLEDOG (AUSTRALIAN)</option>
                <option value="chihuahua">CHIHUAHUA</option>
                <option value="chow">CHOW</option>
                <option value="clumber">CLUMBER</option>
                <option value="cockapoo">COCKAPOO</option>
                <option value="collie-border">COLLIE (BORDER)</option>
                <option value="coonhound">COONHOUND</option>
                <option value="corgi-cardigan">CORGI (CARDIGAN)</option>
                <option value="cotondetulear">COTONDETULEAR</option>
                <option value="dachshund">DACHSHUND</option>
                <option value="dalmatian">DALMATIAN</option>
                <option value="dane-great">GREAT DANE</option>
                <option value="deerhound-scottish">DEERHOUND (SCOTTISH)</option>
                <option value="dhole">DHOLE</option>
                <option value="dingo">DINGO</option>
                <option value="doberman">DOBERMAN</option>
                <option value="elkhound-norwegian">ELKHOUND (NORWEGIAN)</option>
                <option value="entlebucher">ENTLEBUCHER</option>
                <option value="eskimo">ESKIMO</option>
                <option value="germanshepherd">GERMANSHEPPARD</option>
                <option value="greyhound-italian">GREYHOUND (ITALIAN)</option>
                <option value="groenendael">GROENENDAEL</option>
                <option value="hound-afghan">HOUND (AFGHAN)</option>
                <option value="hound-basset">HOUND (BASSET)</option>
                <option value="hound-blood">HOUND (BLOOD)</option>
                <option value="hound-english">HOUND (ENGLISH)</option>
                <option value="hound-ibizan">HOUND (IBIZAN)</option>
                <option value="hound-walker">HOUND (WALKER)</option>
                <option value="husky">HUSKY</option>
                <option value="keeshond">KEEHOND</option>
                <option value="kelpie">KELPIE</option>
                <option value="komondor">KOMONDOR</option>
                <option value="kuvasz">KUVASZ</option>
                <option value="labrador">LABRADOR</option>
                <option value="leonberg">LEONBERG</option>
                <option value="lhasa">LHASA</option>
                <option value="malamute">MALAMUTE</option>
                <option value="malinois">MALINOIS</option>
                <option value="maltese">MALTESE</option>
                <option value="mastiff-bull">MASTIFF (BULL)</option>
                <option value="mastiff-tibetan">MASTIFF (TIBETAN)</option>
                <option value="mexicanhairless">MEXICANHAIRLESS</option>
                <option value="mix">MIX</option>
                <option value="mountain-bernese">MOUNTAIN (BERNESE)</option>
                <option value="mountain-swiss">MOUNTAIN (SWISS)</option>
                <option value="newfoundland">NEWFOUNDLAND</option>
                <option value="otterhound">OTTERHOUND</option>
                <option value="papillon">PAPILLON</option>
                <option value="pekinese">PERKINESE</option>
                <option value="pembroke">PENBROKE</option>
                <option value="pinscher-miniature">PINSCHER (MINIATURE)</option>
                <option value="pointer-german">POINTER (GERMAN)</option>
                <option value="pomeranian">POMERANIAN</option>
                <option value="poodle-miniature">POODLE (MINIATURE)</option>
                <option value="poodle-standard">POODLE (STANDARD)</option>
                <option value="poodle-toy">POODLE (TOY)</option>
                <option value="pug">PUG</option>
                <option value="puggle">PUGGLE</option>
                <option value="pyrenees">PYRENEES</option>
                <option value="redbone">REDBONE</option>
                <option value="retriever-chesapeake">RETRIEVER (CHESAPEAKE)</option>
                <option value="retriever-curly">RETRIEVER (CURLY)</option>
                <option value="retriever-flatcoated">RETRIEVER (FLATCOATED)</option>
                <option value="retriever-golden">RETRIEVER (GOLDEN)</option>
                <option value="ridgeback-rhodesian">RIDGEBACK (RHODESIAN)</option>
                <option value="rottweiler">ROTTWEILER</option>
                <option value="saluki">SALUKI</option>
                <option value="samoyed">SAMOYED</option>
                <option value="schipperke">SCHIPPERKE</option>
                <option value="schnauzer-giant">SCHNAUZER (GIANT)</option>
                <option value="schnauzer-miniature">SCHNAUZER (MINIATURE)</option>
                <option value="setter-english">SETTER (ENGLISH)</option>
                <option value="setter-gordon">SETTER (GORDON)</option>
                <option value="setter-irish">SETTER (IRISH)</option>
                <option value="sheepdog-english">SHEEPDOG (ENGLISH)</option>
                <option value="sheepdog-shetland">SHEEPDOG (SHETLAND)</option>
                <option value="shiba">SHIBA</option>
                <option value="shihtzu">SHIHTZU</option>
                <option value="spaniel-blenheim">SPANIEL (BLENHEIM)</option>
                <option value="spaniel-brittany">SPANIEL (BRITTANY)</option>
                <option value="spaniel-cocker">SPANIEL (COCKER)</option>
                <option value="spaniel-irish">SPANIEL (IRISH)</option>
                <option value="spaniel-japanese">SPANIEL (JAPANESE)</option>
                <option value="spaniel-sussex">SPANIEL (SUSSEX)</option>
                <option value="spaniel-welsh">SPANIEL (WELSH)</option>
                <option value="springer-english">SPRINGER (ENGLISH)</option>
                <option value="stbernard">STBERNARD</option>
                <option value="terrier-american">TERRIER (AMERICAN)</option>
                <option value="terrier-australian">TERRIER (AUSTRALIAN)</option>
                <option value="terrier-bedlington">TERRIER (BEDLINGTON)</option>
                <option value="terrier-border">TERRIER (BORDER)</option>
                <option value="terrier-dandie">TERRIER (DANDIE)</option>
                <option value="terrier-fox">TERRIER (FOX)</option>
                <option value="terrier-irish">TERRIER (IRISH)</option>
                <option value="terrier-kerryblue">TERRIER (KERRYBLUE)</option>
                <option value="terrier-lakeland">TERRIER (LAKELAND)</option>
                <option value="terrier-norfolk">TERRIER (NORFOLK)</option>
                <option value="terrier-norwich">TERRIER (NORWICH)</option>
                <option value="terrier-patterdale">TERRIER (PATTERDALE)</option>
                <option value="terrier-russell">TERRIER (RUSSELL)</option>
                <option value="terrier-scottish">TERRIER (SCOTTISH)</option>
                <option value="terrier-sealyham">TERRIER (SEALYHAM)</option>
                <option value="terrier-silky">TERRIER (SILKY)</option>
                <option value="terrier-tibetan">TERRIER (TIBETAN)</option>
                <option value="terrier-toy">TERRIER (TOY)</option>
                <option value="terrier-westhighland">TERRIER (WESTHIGHLAND)</option>
                <option value="terrier-wheaten">TERRIER (WHEATEN)</option>
                <option value="terrier-yorkshire">TERRIER (YORKSHIRE)</option>
                <option value="vizsla">VIZSLA</option>
                <option value="weimaraner">WEIMARANER</option>
                <option value="whippet">WHIPPET</option>
                <option value="wolfhound-irish">WOLFHOUND (IRISH)</option>
            </select>
                <button type={"submit"}>FETCH DOG!</button>
        </div>
    </form>
);

export default Form; //Sending our Form to the App.js class.