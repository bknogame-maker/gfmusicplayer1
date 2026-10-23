const songs = [

{
name:"Epic Game",
category:"gaming",
file:"music/gaming/song1.mp3"
},

{
name:"Dark Battle",
category:"epic",
file:"music/epic/song1.mp3"
},

{
name:"HERMVXAL - NEMIRAGHSI FUNK Slowed (320)",
category:"phonk",
file:"music/phonk/HERMVXAL - NEMIRAGHSI FUNK Slowed (320).mp3",
cover:"covers/phonk-nemiraghsi.jpg"
},

{
name:"fish (Slowed Down)",
category:"dreamcore",
file:"music/dreamcore/fish (Slowed Down)   d2s1.mp3",
cover:"covers/drc2.jpg"
},

{
name:"Dorian Consept-Hide",
category:"dreamcore",
file:"music/dreamcore/dorian_concept_hide_cs01_version_slowed_1_33x_+_reverb_slowe.mp3",
cover:"covers/drc1.jpg"
},

{
name:"Dorian Consept-Space II",
category:"dreamcore",
file:"music/dreamcore/Space II   Dorian Concept.mp3",
cover:"covers/drc1.jpg"
},

{
name:"yg hypnos - dust collector",
category:"dreamcore",
file:"music/dreamcore/yg hypnos - dust collector.mp3",
cover:"covers/drc2.jpg"
},

{
name:"A Brighter Future   Resonance Hub",
category:"dreamcore",
file:"music/dreamcore/A Brighter Future   Resonance Hub.mp3",
cover:"covers/drc2.jpg"
},

{
name:"Hide-Dorian Concept+SR",
category:"dreamcore",
file:"music/dreamcore/hidesr.mp3",
cover:"covers/drc2.jpg"
},

{
name:"Hayde-Shabe Eshgh",
category:"old",
file:"music/old/song1.mp3",
cover:"covers/hayde.jpg"
},

{
name:"Hayde-Aroosak Joon",
category:"old",
file:"music/old/aroosakhayde.mp3",
cover:"covers/hayde.jpg"
},

{
name:"Nameh-Habib+SR",
category:"old",
file:"music/old/namehhabib.mp3",
cover:"covers/habib.jpg"
},

{
name:"Sedaye Faryad-Habib+SR",
category:"old",
file:"music/old/sedayefaryadhabib.mp3",
cover:"covers/habib.jpg"
},

{
name:"Khalse x Vinak x Pishro x Poori x Chvrsi x Tohi - Mage Shoukhi Darim",
category:"rap",
file:"music/rap/Khalse x Vinak x Pishro x Poori x Chvrsi x Tohi - Mage Shoukhi Darim.mp3",
cover:"covers/Khalse-x-Vinak-x-Pishro-x-Poori-x-Chvrsi-x-Tohi-Mage-Shoukhi-Darim-768x768.jpg"
},

{
name:"ALIXER-Ghadima",
category:"rap",
file:"music/rap/Ghadima.mp3",
cover:"covers/Ghadima.jpg"
},


{
name:"Darioosh-Eshghe Bi Hasel",
category:"old",
file:"music/old/song3.mp3",
cover:"covers/darioosh.jpg"
},

{
name:"Darioosh-Be man nagoo doset daram",
category:"old",
file:"music/old/Dariush - Beman Nagoo Dooset Daram (Remixbaz.com) (320).mp3",
cover:"covers/darioosh.jpg"
},

{
name:"Darioosh-Hasood",
category:"old",
file:"music/old/Dariush - Hasood (Remixbaz.com) (320).mp3",
cover:"covers/darioosh.jpg"
},

{
name:"Sattar-Shazde Khanoom",
category:"old",
file:"music/old/song2.mp3",
cover:"covers/satar.jpg"
},

{
name:"Rock Power",
category:"rock",
file:"music/rock/song1.mp3"
},

{
name:"Shapur - Marg Bar Kolle Nezam - Mahdyar",
category:"rap",
file:"music/rap/Shapur - Marg Bar Kolle Nezam - Mahdyar.mp3",
cover:"covers/marg-bar-kole-nazam.jpg"
},

{
name:"Piano Space",
category:"instrumental",
file:"music/instrumental/song1.mp3"
}

];



const list = document.getElementById("songs");
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const search = document.getElementById("search");
const cover = document.getElementById("cover");



function showCategory(category){

list.innerHTML="";

let result = songs.filter(
song => song.category == category
);


result.forEach(song=>{

let div=document.createElement("div");

div.className="song";

div.innerHTML="🎵 "+song.name;


div.onclick=function(){

audio.src=song.file;

title.innerHTML=song.name;

cover.src=song.cover || "covers/df.jpg";

audio.play();

};


list.appendChild(div);

});

}




function searchSongs(){
	
console.log("SEARCH RUNNING");

let text = search.value.toLowerCase();

list.innerHTML = "";


songs
.filter(song =>
song.name.toLowerCase().includes(text)
)
.forEach(song=>{


let div=document.createElement("div");

div.className="song";

div.innerHTML="🎵 "+song.name;


div.onclick=function(){

audio.src=song.file;

title.innerHTML=song.name;

cover.src=song.cover || "covers/default.jpg";

audio.play();

};


list.appendChild(div);


});

}
