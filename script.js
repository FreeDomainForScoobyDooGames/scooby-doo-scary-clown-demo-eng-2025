

let intro_skip = true;

let chase_skip = false;

let room_carousel_version = 1;

let room_center_version = 1;

let room_garden_version = 1;

let room_hall_version = 1;

let scooby_snacks = 0;

//Sfx Player
const sfx = new Audio();

//Voice Player
const voice = new Audio();
voice.volume = 0.75;

//Music Player
const music = new Audio();
music.volume = 0.25;

//Music Files
let musicFiles = [
    "sfx/music/0.sound",
];

let currentMusicIndex = Math.floor(Math.random() * ((musicFiles.length) - 0 + 1) + 0);

// Play Music
function playMusic(index) {
    if (index >= musicFiles.length) {
        currentMusicIndex = 0; // If ends,restart the list playing
    }
    
    music.src = musicFiles[currentMusicIndex];
    music.play();
}

// Ha a dal véget ér, lépjen a következőre
music.addEventListener("ended", () => {
    currentMusicIndex++;
    playMusic(currentMusicIndex);
});

//Room Entering Timeout
const room_entering_timeout = 2000;


let ghost_appear_chance = 15;

let current_room_number = 1;

function ChanceOfGhostAppear() 
{
    let min = 0;
    let max = ghost_appear_chance;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    if(random_number >= max) 
    {
        return true;
    }
}

function Fred_Speaking() 
{
    let min = 0;
    let max = 5;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    let fred_voices = [
        "sfx/voice/fred0.sound",
        "sfx/voice/fred1.sound",
        "sfx/voice/fred2.sound",
        "sfx/voice/fred3.sound",
        "sfx/voice/fred4.sound",
        "sfx/voice/fred5.sound"
    ];
    voice.src = fred_voices[random_number];
    voice.play();
}

function Daphne_Speaking() 
{
    let min = 0;
    let max = 3;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    let daphne_voices = [
        "sfx/voice/daphne0.sound",
        "sfx/voice/daphne1.sound",
        "sfx/voice/daphne2.sound",
        "sfx/voice/daphne3.sound"
    ];
    voice.src = daphne_voices[random_number];
    voice.play();
}

function Velma_Speaking() 
{
    let min = 0;
    let max = 4;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    let velma_voices = [
        "sfx/voice/velma0.sound",
        "sfx/voice/velma1.sound",
        "sfx/voice/velma2.sound",
        "sfx/voice/velma3.sound",
        "sfx/voice/velma4.sound"
    ];
    voice.src = velma_voices[random_number];
    voice.play();
}

function Scooby_Speaking() 
{
    let min = 0;
    let max = 6;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    let scooby_voices = [
        "sfx/voice/scooby0.sound",
        "sfx/voice/scooby1.sound",
        "sfx/voice/scooby2.sound",
        "sfx/voice/scooby3.sound",
        "sfx/voice/scooby4.sound",
        "sfx/voice/scooby5.sound",
        "sfx/voice/scooby6.sound"
    ];
    voice.src = scooby_voices[random_number];
    voice.play();
}

function Shaggy_Speaking() 
{
    let min = 0;
    let max = 4;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    let shaggy_voices = [
        "sfx/voice/shaggy0.sound",
        "sfx/voice/shaggy1.sound",
        "sfx/voice/shaggy2.sound",
        "sfx/voice/shaggy3.sound",
        "sfx/voice/shaggy4.sound"
    ];
    voice.src = shaggy_voices[random_number];
    voice.play();
}

function Travel() 
{
    voice.src = "sfx/music/silence.sound";
    voice.play();
    if(document.getElementById("canvas").contains(document.getElementById("character_team"))) 
    {
        document.getElementById("character_team").remove();
    }
}

function Loading_Room_Entrance() 
{
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_entrance.image')";
    document.getElementById("canvas").innerHTML = `
        <div id="character_team" style="
            position: absolute;
            left: 200px;
            top: 80px;
            width: 640px; 
            height: 480px; 
            background: url('gfx/characters/team.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
            <button id="character_fred" style="
                position: absolute;
                left: 24px;
                top: 183px;
                width: 67px; 
                height: 192px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
            </button>
            <button id="character_daphne" style="
                position: absolute;
                left: 98px;
                top: 196px;
                width: 66px; 
                height: 167px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
            </button>
            <button id="character_velma" style="
                position: absolute;
                left: 164px;
                top: 210px;
                width: 60px; 
                height: 158px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 205px;
                top: 314px;
                width: 103px; 
                height: 86px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 270px;
                top: 253px;
                width: 43px; 
                height: 61px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_shaggy" style="
                position: absolute;
                left: 352px;
                top: 183px;
                width: 61px; 
                height: 184px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
            </button>
        </div>
        <button id="room_entrance_object" style="
            position: absolute;
            left: 220px;
            top: 150px;
            width: 200px; 
            height: 150px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_up.image'), pointer;" onclick="Travel_Room_Entrance_To_Room_Center()">
        </button>`;
}

function Loading_Room_Center() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_center.image')";
    document.getElementById("canvas").innerHTML = `
        <div id="character_team" style="
            position: absolute;
            left: 30px;
            top: 80px;
            width: 640px; 
            height: 480px; 
            background: url('gfx/characters/team.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
            <button id="character_fred" style="
                position: absolute;
                left: 24px;
                top: 183px;
                width: 67px; 
                height: 192px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
            </button>
            <button id="character_daphne" style="
                position: absolute;
                left: 98px;
                top: 196px;
                width: 66px; 
                height: 167px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
            </button>
            <button id="character_velma" style="
                position: absolute;
                left: 164px;
                top: 210px;
                width: 60px; 
                height: 158px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 205px;
                top: 314px;
                width: 103px; 
                height: 86px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 270px;
                top: 253px;
                width: 43px; 
                height: 61px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_shaggy" style="
                position: absolute;
                left: 352px;
                top: 183px;
                width: 61px; 
                height: 184px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
            </button>
        </div>
        <button id="room_center_object" style="
            position: absolute;
            left: 220px;
            top: 350px;
            width: 200px; 
            height: 300px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_down.image'), pointer;" onclick="Travel_Room_Center_To_Room_Forest()">
        </button>
        <button id="room_center_object" style="
            position: absolute;
            left: 453px;
            top: 268px;
            width: 120px; 
            height: 120px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_up.image'), pointer;" onclick="Travel_Room_Center_To_Room_TicTacToe()">
        </button>`;
}

function Loading_Room_Forest() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_forest.image')";
    document.getElementById("canvas").innerHTML = `
    <div id="character_team" style="
        position: absolute;
        left: 80px;
        top: 80px;
        width: 640px; 
        height: 480px; 
        background: url('gfx/characters/team.image') no-repeat center;
        background-size: cover;
        outline: none;
        border: none;">
        <button id="character_fred" style="
            position: absolute;
            left: 24px;
            top: 183px;
            width: 67px; 
            height: 192px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
        </button>
        <button id="character_daphne" style="
            position: absolute;
            left: 98px;
            top: 196px;
            width: 66px; 
            height: 167px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
        </button>
        <button id="character_velma" style="
            position: absolute;
            left: 164px;
            top: 210px;
            width: 60px; 
            height: 158px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
        </button>
        <button id="character_scooby" style="
            position: absolute;
            left: 205px;
            top: 314px;
            width: 103px; 
            height: 86px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
        </button>
        <button id="character_scooby" style="
            position: absolute;
            left: 270px;
            top: 253px;
            width: 43px; 
            height: 61px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
        </button>
        <button id="character_shaggy" style="
            position: absolute;
            left: 352px;
            top: 183px;
            width: 61px; 
            height: 184px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
        </button>
    </div>
    <button id="room_forest_object" style="
        position: absolute;
        left: 220px;
        top: 350px;
        width: 200px; 
        height: 300px; 
        background: url('gfx/cursors/none.image') no-repeat center;
        background-size: cover;
        outline: none;
        border: none;
        cursor: url('gfx/cursors/pointer_down.image'), pointer;" onclick="Travel_Room_Forest_To_Room_Center()">
    </button>
    <button id="room_forest_object" style="
        position: absolute;
        left: 0px;
        top: 150px;
        width: 100px; 
        height: 300px; 
        background: url('gfx/cursors/none.image') no-repeat center;
        background-size: cover;
        outline: none;
        border: none;
        cursor: url('gfx/cursors/pointer_left.image'), pointer;" onclick="Travel_Room_Forest_To_Room_Carousel()">
    </button>
    <button id="room_forest_object" style="
        position: absolute;
        left: 220px;
        top: 0px;
        width: 200px; 
        height: 300px; 
        background: url('gfx/cursors/none.image') no-repeat center;
        background-size: cover;
        outline: none;
        border: none;
        cursor: url('gfx/cursors/pointer_up.image'), pointer;" onclick="Travel_Room_Forest_To_Room_Garden()">
    </button>`;
}

function Loading_Room_Carousel() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_carousel.image')";
    document.getElementById("canvas").innerHTML = `
        <div id="character_team" style="
            position: absolute;
            left: 30px;
            top: 80px;
            width: 640px; 
            height: 480px; 
            background: url('gfx/characters/team.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
            <button id="character_fred" style="
                position: absolute;
                left: 24px;
                top: 183px;
                width: 67px; 
                height: 192px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
            </button>
            <button id="character_daphne" style="
                position: absolute;
                left: 98px;
                top: 196px;
                width: 66px; 
                height: 167px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
            </button>
            <button id="character_velma" style="
                position: absolute;
                left: 164px;
                top: 210px;
                width: 60px; 
                height: 158px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 205px;
                top: 314px;
                width: 103px; 
                height: 86px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 270px;
                top: 253px;
                width: 43px; 
                height: 61px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_shaggy" style="
                position: absolute;
                left: 352px;
                top: 183px;
                width: 61px; 
                height: 184px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
            </button>
        </div>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 220px;
            top: 350px;
            width: 200px; 
            height: 300px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_down.image'), pointer;" onclick="Travel_Room_Carousel_To_Room_Forest()">
        </button>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 0px;
            top: 0px;
            width: 320px; 
            height: 220px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Carousel_Big_Eye_Machine()">
        </button>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 504px;
            top: 284px;
            width: 136px; 
            height: 196px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Carousel_Bush()">
        </button>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 343px;
            top: 378px;
            width: 44px; 
            height: 50px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Carousel_Violin()">
        </button>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 351px;
            top: 363px;
            width: 16px; 
            height: 16px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Carousel_Key()">
        </button>`;
}

function Loading_Room_Carousel2() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_carousel2.image')";
    document.getElementById("canvas").innerHTML = `
        <div id="character_team" style="
            position: absolute;
            left: 30px;
            top: 80px;
            width: 640px; 
            height: 480px; 
            background: url('gfx/characters/team.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
            <button id="character_fred" style="
                position: absolute;
                left: 24px;
                top: 183px;
                width: 67px; 
                height: 192px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
            </button>
            <button id="character_daphne" style="
                position: absolute;
                left: 98px;
                top: 196px;
                width: 66px; 
                height: 167px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
            </button>
            <button id="character_velma" style="
                position: absolute;
                left: 164px;
                top: 210px;
                width: 60px; 
                height: 158px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 205px;
                top: 314px;
                width: 103px; 
                height: 86px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 270px;
                top: 253px;
                width: 43px; 
                height: 61px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_shaggy" style="
                position: absolute;
                left: 352px;
                top: 183px;
                width: 61px; 
                height: 184px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
            </button>
        </div>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 220px;
            top: 350px;
            width: 200px; 
            height: 300px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_down.image'), pointer;" onclick="Travel_Room_Carousel_To_Room_Forest()">
        </button>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 0px;
            top: 0px;
            width: 320px; 
            height: 220px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Carousel2_Big_Eye_Machine()">
        </button>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 504px;
            top: 284px;
            width: 136px; 
            height: 196px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Carousel2_Bush()">
        </button>
        <button id="room_carousel_object" style="
            position: absolute;
            left: 343px;
            top: 378px;
            width: 44px; 
            height: 50px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Carousel2_Violin()">
        </button>`;
}

function Loading_Room_Garden() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_garden.image')";
    document.getElementById("canvas").innerHTML = `
        <div id="character_team" style="
            position: absolute;
            left: 200px;
            top: 80px;
            width: 640px; 
            height: 480px; 
            background: url('gfx/characters/team.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
            <button id="character_fred" style="
                position: absolute;
                left: 24px;
                top: 183px;
                width: 67px; 
                height: 192px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
            </button>
            <button id="character_daphne" style="
                position: absolute;
                left: 98px;
                top: 196px;
                width: 66px; 
                height: 167px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
            </button>
            <button id="character_velma" style="
                position: absolute;
                left: 164px;
                top: 210px;
                width: 60px; 
                height: 158px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 205px;
                top: 314px;
                width: 103px; 
                height: 86px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 270px;
                top: 253px;
                width: 43px; 
                height: 61px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_shaggy" style="
                position: absolute;
                left: 352px;
                top: 183px;
                width: 61px; 
                height: 184px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
            </button>
        </div>
        <button id="room_garden_object" style="
            position: absolute;
            left: 420px;
            top: 350px;
            width: 200px; 
            height: 300px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_rightdown.image'), pointer;" onclick="Travel_Room_Garden_To_Room_Forest()">
        </button>
        <button id="room_garden_object" style="
            position: absolute;
            left: 464px;
            top: 299px;
            width: 49px; 
            height: 77px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Garden_Window1()">
        </button>
        <button id="room_garden_object" style="
            position: absolute;
            left: 157px;
            top: 419px;
            width: 56px; 
            height: 61px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Garden_Footprints()">
        </button>
        <button id="room_garden_object" style="
            position: absolute;
            left: 168px;
            top: 290px;
            width: 61px; 
            height: 102px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_up.image'), pointer;" onclick="Room_Garden_Door()">
        </button>`;
}

function Loading_Room_Garden2() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_garden.image')";
    document.getElementById("canvas").innerHTML = `
        <div id="character_team" style="
            position: absolute;
            left: 200px;
            top: 80px;
            width: 640px; 
            height: 480px; 
            background: url('gfx/characters/team.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
            <button id="character_fred" style="
                position: absolute;
                left: 24px;
                top: 183px;
                width: 67px; 
                height: 192px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
            </button>
            <button id="character_daphne" style="
                position: absolute;
                left: 98px;
                top: 196px;
                width: 66px; 
                height: 167px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
            </button>
            <button id="character_velma" style="
                position: absolute;
                left: 164px;
                top: 210px;
                width: 60px; 
                height: 158px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 205px;
                top: 314px;
                width: 103px; 
                height: 86px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 270px;
                top: 253px;
                width: 43px; 
                height: 61px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_shaggy" style="
                position: absolute;
                left: 352px;
                top: 183px;
                width: 61px; 
                height: 184px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
            </button>
        </div>
        <button id="room_garden_object" style="
            position: absolute;
            left: 420px;
            top: 350px;
            width: 200px; 
            height: 300px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_rightdown.image'), pointer;" onclick="Travel_Room_Garden_To_Room_Forest()">
        </button>
        <button id="room_garden_object" style="
            position: absolute;
            left: 464px;
            top: 299px;
            width: 49px; 
            height: 77px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Garden_Window1()">
        </button>
        <button id="room_garden_object" style="
            position: absolute;
            left: 157px;
            top: 419px;
            width: 56px; 
            height: 61px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Garden_Footprints()">
        </button>
        <button id="room_garden_object" style="
            position: absolute;
            left: 168px;
            top: 290px;
            width: 61px; 
            height: 102px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_up.image'), pointer;" onclick="Travel_Room_Garden_To_Room_Hall()">
        </button>`;
}

function Loading_Room_Hall() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_hall.image')";
    document.getElementById("canvas").innerHTML = `
        <div id="character_team" style="
            position: absolute;
            left: 30px;
            top: 80px;
            width: 640px; 
            height: 480px; 
            background: url('gfx/characters/team.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
            <button id="character_fred" style="
                position: absolute;
                left: 24px;
                top: 183px;
                width: 67px; 
                height: 192px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
            </button>
            <button id="character_daphne" style="
                position: absolute;
                left: 98px;
                top: 196px;
                width: 66px; 
                height: 167px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
            </button>
            <button id="character_velma" style="
                position: absolute;
                left: 164px;
                top: 210px;
                width: 60px; 
                height: 158px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 205px;
                top: 314px;
                width: 103px; 
                height: 86px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 270px;
                top: 253px;
                width: 43px; 
                height: 61px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_shaggy" style="
                position: absolute;
                left: 352px;
                top: 183px;
                width: 61px; 
                height: 184px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
            </button>
        </div>
        <button id="room_hall_object" style="
            position: absolute;
            left: 0px;
            top: 0px;
            width: 50px; 
            height: 480px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_left.image'), pointer;" onclick="Travel_Room_Hall_To_Room_Garden()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 267px;
            top: 278px;
            width: 140px; 
            height: 104px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_up.image'), pointer;" onclick="Room_Hall_Without_Scooby_Snacks()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 554px;
            top: 343px;
            width: 36px; 
            height: 24px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Hall_Bell()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 516px;
            top: 455px;
            width: 57px; 
            height: 20px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Hall_Sandwich()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 400px;
            top: 207px;
            width: 54px; 
            height: 61px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Hall_Face_Right()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 211px;
            top: 207px;
            width: 46px; 
            height: 67px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Hall_Face_Left()">
        </button>`;
}

function Loading_Room_Hall2() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_hall.image')";
    document.getElementById("canvas").innerHTML = `
        <div id="character_team" style="
            position: absolute;
            left: 30px;
            top: 80px;
            width: 640px; 
            height: 480px; 
            background: url('gfx/characters/team.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
            <button id="character_fred" style="
                position: absolute;
                left: 24px;
                top: 183px;
                width: 67px; 
                height: 192px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Fred_Speaking()">
            </button>
            <button id="character_daphne" style="
                position: absolute;
                left: 98px;
                top: 196px;
                width: 66px; 
                height: 167px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Daphne_Speaking()">
            </button>
            <button id="character_velma" style="
                position: absolute;
                left: 164px;
                top: 210px;
                width: 60px; 
                height: 158px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Velma_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 205px;
                top: 314px;
                width: 103px; 
                height: 86px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_scooby" style="
                position: absolute;
                left: 270px;
                top: 253px;
                width: 43px; 
                height: 61px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Scooby_Speaking()">
            </button>
            <button id="character_shaggy" style="
                position: absolute;
                left: 352px;
                top: 183px;
                width: 61px; 
                height: 184px; 
                background: url('gfx/cursors/none.image') no-repeat center;
                background-size: cover;
                outline: none;
                border: none;
                cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Shaggy_Speaking()">
            </button>
        </div>
        <button id="room_hall_object" style="
            position: absolute;
            left: 0px;
            top: 0px;
            width: 50px; 
            height: 480px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_left.image'), pointer;" onclick="Travel_Room_Hall_To_Room_Garden()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 267px;
            top: 278px;
            width: 140px; 
            height: 104px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_up.image'), pointer;" onclick="Travel_Room_Hall_To_Demo_End()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 554px;
            top: 343px;
            width: 36px; 
            height: 24px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Hall_Bell()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 516px;
            top: 455px;
            width: 57px; 
            height: 20px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Hall_Sandwich()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 400px;
            top: 207px;
            width: 54px; 
            height: 61px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Hall_Face_Right()">
        </button>
        <button id="room_hall_object" style="
            position: absolute;
            left: 211px;
            top: 207px;
            width: 46px; 
            height: 67px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/grab.image'), pointer;" onclick="Room_Hall_Face_Left()">
        </button>`;
}

function Loading_Room_TicTacToe() 
{
    //Loading the new room
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_tictactoe.image')";
    document.getElementById("canvas").innerHTML = `
    <div class="tictactoe_container" style="
            position: absolute;
            left: 150px;
            top: 60px;">
        <div class="row">
            <div class="col-md-12">
                <h1></h1>
            </div>
            <div class="col-md-12">
                <button class="ttt_button" id="btn_ttt1" onclick="ChooseField1()">-</button>
                <button class="ttt_button" id="btn_ttt2" onclick="ChooseField2()">-</button>
                <button class="ttt_button" id="btn_ttt3" onclick="ChooseField3()">-</button>
            </div>
            <div class="col-md-12">
                <button class="ttt_button" id="btn_ttt4" onclick="ChooseField4()">-</button>
                <button class="ttt_button" id="btn_ttt5" onclick="ChooseField5()">-</button>
                <button class="ttt_button" id="btn_ttt6" onclick="ChooseField6()">-</button>
            </div>
            <div class="col-md-12">
                <button class="ttt_button" id="btn_ttt7" onclick="ChooseField7()">-</button>
                <button class="ttt_button" id="btn_ttt8" onclick="ChooseField8()">-</button>
                <button class="ttt_button" id="btn_ttt9" onclick="ChooseField9()">-</button>
            </div>
        </div>
    </div>
    <div id="scooby_snacks_hud" style="
            position: absolute;
            left: 0px;
            top: 0px;
            width: 128px; 
            height: 128px; 
            background: url('gfx/hud/scooby_snacks_hud.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
        <p id="scooby_snacks_counter" style="
        font-family: 'Scooby Doo';
        color: white;
        position: relative;
        left: 60px;
        top: 20px;"></p>
    </div>
    <div id="back_hud" style="
            position: absolute;
            left: 576px;
            top: 416px;
            width: 64px; 
            height: 64px; 
            background: url('gfx/hud/back.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;">
    </div>
    <button id="room_tictactoe_object" style="
            position: absolute;
            left: 576px;
            top: 416px;
            width: 64px; 
            height: 64px; 
            background: url('gfx/cursors/none.image') no-repeat center;
            background-size: cover;
            outline: none;
            border: none;
            cursor: url('gfx/cursors/pointer_right.image'), pointer;" onclick="Room_TicTacToe_Exit()">
        </button>`;
    document.getElementById("scooby_snacks_counter").innerHTML = scooby_snacks;
}

function GhostAppear() 
{
    //Remove the previous room objects
    document.getElementById("canvas").innerHTML = ``;
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    voice.src = "sfx/voice/ghost_appear.sound";
    voice.play();
    setTimeout(() => {
        music.src = "sfx/music/chase.sound";
        music.play();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/intro.movie" type="video/mp4">
        Movie fail.
    </video>`
        //Stop All Dialogues
        voice.src = "sfx/music/silence.sound";
        voice.play();
    }, 3500);
    setTimeout(() => {
        //Set Music
        musicFiles = [
            "sfx/music/0.sound"
        ];
        currentMusicIndex = Math.floor(Math.random() * ((musicFiles.length) - 0 + 1) + 0);
        playMusic(currentMusicIndex)
        Loading_Room_Entrance();
    }, 3500+11000);
    setTimeout(() => {
        let min = 0;
        let max = 2;
        let random_number = Math.floor(Math.random() * (max - min + 1) + min);
        if(random_number == 0) 
        {
            voice.src = "sfx/voice/after_chase1.sound";
            voice.play();
        }
        else if(random_number == 1) 
        {
            voice.src = "sfx/voice/after_chase2.sound";
            voice.play();
        }
        else if(random_number == 2) 
        {
            voice.src = "sfx/voice/after_chase3.sound";
            voice.play();
        }
    }, 3500+12000);
}

function Room_Garden_Window1() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_garden_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        sfx.src = "sfx/sound/sparking_light2.sound";
        sfx.play();
        document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_garden_window1.image')";
        setTimeout(() => {
            document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_garden.image')";
        }, 500);
    }
}

function Room_Garden_Footprints() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_garden_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        let min = 0;
        let max = 2;
        let random_number = Math.floor(Math.random() * (max - min + 1) + min);
        if(random_number == 0) 
        {
            voice.src = "sfx/voice/footprints1.sound";
            voice.play();
        }
        else if(random_number == 1)
        {
            voice.src = "sfx/voice/footprints2.sound";
            voice.play();
        }
        else if(random_number == 2)
        {
            voice.src = "sfx/voice/footprints3.sound";
            voice.play();
        }
    }
}

function Room_Garden_Door() 
{
    let min = 0;
    let max = 1;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    if(random_number > min) 
    {
        voice.src = "sfx/voice/door_locked1.sound";
        voice.play();
    }
    else 
    {
        voice.src = "sfx/voice/door_locked2.sound";
        voice.play();
    }
}

function Room_Carousel_Big_Eye_Machine() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_carousel_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        sfx.src = "sfx/sound/break.sound";
        sfx.play();
    }
}

function Room_Carousel2_Big_Eye_Machine() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_carousel2_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        sfx.src = "sfx/sound/break.sound";
        sfx.play();
    }
}

function Room_Carousel_Bush() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_carousel_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        sfx.src = "sfx/sound/bush.sound";
        sfx.play();
    }
}

function Room_Carousel2_Bush() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_carousel2_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        sfx.src = "sfx/sound/bush.sound";
        sfx.play();
    }
}

function Room_Carousel_Violin() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_carousel_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        let min = 0;
        let max = 1;
        let random_number = Math.floor(Math.random() * (max - min + 1) + min);
        if(random_number > min) 
        {
            sfx.src = "sfx/sound/violin1.sound";
            sfx.play();
        }
        else 
        {
            sfx.src = "sfx/sound/violin2.sound";
            sfx.play();
        }
    }
}

function Room_Carousel2_Violin() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_carousel2_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        let min = 0;
        let max = 1;
        let random_number = Math.floor(Math.random() * (max - min + 1) + min);
        if(random_number > min) 
        {
            sfx.src = "sfx/sound/violin1.sound";
            sfx.play();
        }
        else 
        {
            sfx.src = "sfx/sound/violin2.sound";
            sfx.play();
        }
    }
}

function Room_Carousel_Key() 
{
    let min = 0;
    let max = 2;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    if(random_number == 0) 
    {
        voice.src = "sfx/voice/key1.sound";
        voice.play();
    }
    else if(random_number == 1)
    {
        voice.src = "sfx/voice/key2.sound";
        voice.play();
    }
    else if(random_number == 2)
    {
        voice.src = "sfx/voice/key3.sound";
        voice.play();
    }
    room_carousel_version = 2;
    room_garden_version = 2;
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    setTimeout(() => {
        document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_carousel2.image')";
        //Remove the previous room objects
        document.getElementById("canvas").innerHTML = ``;
        sfx.src = "sfx/sound/key_pickup.sound";
        sfx.play();
        Loading_Room_Carousel2();
    }, 1000);
}

function Room_Hall_Without_Scooby_Snacks() 
{
    let min = 0;
    let max = 1;
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    if(random_number > min) 
    {
        voice.src = "sfx/voice/no_scooby_snacks1.sound";
        voice.play();
    }
    else 
    {
        voice.src = "sfx/voice/no_scooby_snacks2.sound";
        voice.play();
    }
}

function Room_Hall_Bell() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_hall_ghost_appear.movie" type="video/mp4">
        Movie fail.
    </video>`
    }
    else 
    {
        sfx.src = "sfx/sound/bell.sound";
        sfx.play();
    }
}

function Room_Hall_Sandwich() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_hall_ghost_appear.movie" type="video/mp4">
            Movie fail.
        </video>`
    }
    else 
    {
        let min = 0;
        let max = 1;
        let random_number = Math.floor(Math.random() * (max - min + 1) + min);
        if(random_number > min) 
        {
            voice.src = "sfx/voice/sandwich1.sound";
            voice.play();
        }
        else 
        {
            voice.src = "sfx/voice/sandwich2.sound";
            voice.play();
        }
    }
}

function Room_Hall_Face_Right() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_hall_ghost_appear.movie" type="video/mp4">
            Movie fail.
        </video>`
    }
    else 
    {
        sfx.src = "sfx/sound/appear.sound";
        sfx.play();
        document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_hall_face1.image')";
        setTimeout(() => {
            document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_hall.image')";
        }, 1250);
    }
}

function Room_Hall_Face_Left() 
{
    if(ChanceOfGhostAppear()) 
    {
        GhostAppear();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/room_hall_ghost_appear.movie" type="video/mp4">
            Movie fail.
        </video>`
    }
    else 
    {
        sfx.src = "sfx/sound/appear.sound";
        sfx.play();
        document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_hall_face2.image')";
        setTimeout(() => {
            document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_hall.image')";
        }, 1250);
    }
}

function Room_TicTacToe_Exit() 
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        Loading_Room_Center();
    }, room_entering_timeout);
}

function NewGame() 
{
    if(intro_skip === true) 
    {
        intro_skip = false;
        //Remove Movie
        document.getElementById("movie").remove();
        document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_black.image')";
        //Stop Intro Movie Sound
        musicFiles = [
            "sfx/music/silence.sound",
        ];
        currentMusicIndex = Math.floor(Math.random() * ((musicFiles.length) - 0 + 1) + 0);
        playMusic(currentMusicIndex);
        //Remove Cursor
        document.body.classList.add("cursor-hidden");
        setTimeout(() => {
            //Set Cursor
            document.body.classList.remove("cursor-hidden");
            //Play Music
            musicFiles = [
                "sfx/music/0.sound",
            ];
            playMusic(currentMusicIndex);
            Loading_Room_Entrance();
        }, room_entering_timeout);
    }
}

function Travel_Room_Entrance_To_Room_Center() 
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        Loading_Room_Center();
    }, room_entering_timeout);
}

function Travel_Room_Center_To_Room_Forest()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        //Set Music
        musicFiles = [
            "sfx/music/1.sound",
            "sfx/music/2.sound",
            "sfx/music/3.sound",
            "sfx/music/4.sound"
        ];
        currentMusicIndex = Math.floor(Math.random() * ((musicFiles.length) - 0 + 1) + 0);
        playMusic(currentMusicIndex)
        Travel();
        Loading_Room_Forest();
    }, room_entering_timeout);
}

function Travel_Room_Forest_To_Room_Center()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        //Set Music
        musicFiles = [
            "sfx/music/0.sound"
        ];
        currentMusicIndex = Math.floor(Math.random() * ((musicFiles.length) - 0 + 1) + 0);
        playMusic(currentMusicIndex)
        Travel();
        Loading_Room_Center();
    }, room_entering_timeout);
}

function Travel_Room_Forest_To_Room_Carousel()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        if(room_carousel_version == 1) 
        {
            Loading_Room_Carousel();
        }
        else if(room_carousel_version == 2) 
        {
            Loading_Room_Carousel2();
        }
    }, room_entering_timeout);
}

function Travel_Room_Carousel_To_Room_Forest()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        Loading_Room_Forest();
    }, room_entering_timeout);
}

function Travel_Room_Forest_To_Room_Garden()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        if(room_carousel_version == 1) 
        {
            Loading_Room_Garden();
        }
        else if(room_carousel_version == 2) 
        {
            Loading_Room_Garden2();
        }
    }, room_entering_timeout);
}

function Travel_Room_Garden_To_Room_Forest()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        Loading_Room_Forest();
    }, room_entering_timeout);
}

function Travel_Room_Garden_To_Room_Hall()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        if(room_hall_version == 1) 
        {
            Loading_Room_Hall();
        }
        else if(room_hall_version == 2) 
        {
            Loading_Room_Hall2();
        }
    }, room_entering_timeout);
}

function Travel_Room_Hall_To_Room_Garden()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        if(room_garden_version == 1) 
        {
            Loading_Room_Garden();
        }
        else if(room_garden_version == 2) 
        {
            Loading_Room_Garden2();
        }
    }, room_entering_timeout);
}

function Travel_Room_Center_To_Room_TicTacToe()
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        Loading_Room_TicTacToe();
        BotChooseRandom();
    }, room_entering_timeout);
}

function Travel_Room_Hall_To_Demo_End() 
{
    //Remove the previous room objects
    const canvas = document.getElementById("canvas");
    const buttons = canvas.querySelectorAll("button");
    buttons.forEach(btn => btn.remove());
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        Travel();
        //Movie
        document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
        <source src="gfx/movies/demo_end.movie" type="video/mp4">
        Movie fail.
    </video>`
        //Set Music
        musicFiles = [
            "sfx/music/silence.sound"
        ];
        currentMusicIndex = Math.floor(Math.random() * ((musicFiles.length) - 0 + 1) + 0);
        playMusic(currentMusicIndex)
        voice.src = "sfx/voice/demo_end.sound";
        voice.play();
    }, room_entering_timeout);
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        Travel();
        location.reload();
    }, room_entering_timeout+2000);
}

function Setup() 
{
    //Preload Images
    const preloadImage = (url) => {
        const img = new Image();
        img.src = url;
    };
    preloadImage('gfx/characters/team.image');
    preloadImage('gfx/characters/team_scared.image');
    preloadImage('gfx/cursors/default.image');
    preloadImage('gfx/cursors/grab.image');
    preloadImage('gfx/cursors/none.image');
    preloadImage('gfx/cursors/pointer_down.image');
    preloadImage('gfx/cursors/pointer_left.image');
    preloadImage('gfx/cursors/pointer_leftdown.image');
    preloadImage('gfx/cursors/pointer_leftup.image');
    preloadImage('gfx/cursors/pointer_right.image');
    preloadImage('gfx/cursors/pointer_rightdown.image');
    preloadImage('gfx/cursors/pointer_rightup.image');
    preloadImage('gfx/cursors/pointer_up.image');
    preloadImage('gfx/hud/back.image');
    preloadImage('gfx/hud/scooby_snacks_hud.image');
    preloadImage('gfx/rooms/room_black.image');
    preloadImage('gfx/rooms/room_carousel.image');
    preloadImage('gfx/rooms/room_carousel2.image');
    preloadImage('gfx/rooms/room_center.image');
    preloadImage('gfx/rooms/room_entrance.image');
    preloadImage('gfx/rooms/room_forest.image');
    preloadImage('gfx/rooms/room_garden.image');
    preloadImage('gfx/rooms/room_hall.image');
    preloadImage('gfx/rooms/room_hall_face1.image');
    preloadImage('gfx/rooms/room_hall_face2.image');
    preloadImage('gfx/rooms/room_hall_mainmenu.image');
    preloadImage('gfx/rooms/room_hall_mainmenu2.image');
    preloadImage('gfx/rooms/room_hall_tictactoe.image');
    preloadImage('gfx/rooms/room_hall_mainmenu.image');
    //Preload Sounds
    const preloadSound = (url) => {
        //Preload Sound
        const preload_sound = new Audio();
        preload_sound.src = url;
        preload_sound.volume = 0;
        preload_sound.play();
    };
    preloadSound('sfx/music/0.sound');
    preloadSound('sfx/music/1.sound');
    preloadSound('sfx/music/2.sound');
    preloadSound('sfx/music/3.sound');
    preloadSound('sfx/music/4.sound');
    preloadSound('sfx/music/chase.sound');
    preloadSound('sfx/music/intro.sound');
    preloadSound('sfx/music/silence.sound');
    preloadSound('sfx/sound/appear.sound');
    preloadSound('sfx/sound/bell.sound');
    preloadSound('sfx/sound/break.sound');
    preloadSound('sfx/sound/bush.sound');
    preloadSound('sfx/sound/key_pickup.sound');
    preloadSound('sfx/sound/sparking_light2.sound');
    preloadSound('sfx/sound/violin1.sound');
    preloadSound('sfx/sound/violin2.sound');
    preloadSound('sfx/voice/after_chase1.sound');
    preloadSound('sfx/voice/after_chase2.sound');
    preloadSound('sfx/voice/after_chase3.sound');
    preloadSound('sfx/voice/daphne0.sound');
    preloadSound('sfx/voice/daphne1.sound');
    preloadSound('sfx/voice/daphne2.sound');
    preloadSound('sfx/voice/daphne3.sound');
    preloadSound('sfx/voice/demo_end.sound');
    preloadSound('sfx/voice/door_locked1.sound');
    preloadSound('sfx/voice/door_locked2.sound');
    preloadSound('sfx/voice/footprints1.sound');
    preloadSound('sfx/voice/footprints2.sound');
    preloadSound('sfx/voice/footprints3.sound');
    preloadSound('sfx/voice/fred0.sound');
    preloadSound('sfx/voice/fred1.sound');
    preloadSound('sfx/voice/fred2.sound');
    preloadSound('sfx/voice/fred3.sound');
    preloadSound('sfx/voice/fred4.sound');
    preloadSound('sfx/voice/fred5.sound');
    preloadSound('sfx/voice/ghost_appear.sound');
    preloadSound('sfx/voice/key1.sound');
    preloadSound('sfx/voice/key2.sound');
    preloadSound('sfx/voice/key3.sound');
    preloadSound('sfx/voice/no_scooby_snacks1.sound');
    preloadSound('sfx/voice/no_scooby_snacks2.sound');
    preloadSound('sfx/voice/sandwich1.sound');
    preloadSound('sfx/voice/sandwich2.sound');
    preloadSound('sfx/voice/scooby0.sound');
    preloadSound('sfx/voice/scooby1.sound');
    preloadSound('sfx/voice/scooby2.sound');
    preloadSound('sfx/voice/scooby3.sound');
    preloadSound('sfx/voice/scooby4.sound');
    preloadSound('sfx/voice/scooby5.sound');
    preloadSound('sfx/voice/scooby6.sound');
    preloadSound('sfx/voice/shaggy0.sound');
    preloadSound('sfx/voice/shaggy1.sound');
    preloadSound('sfx/voice/shaggy2.sound');
    preloadSound('sfx/voice/shaggy3.sound');
    preloadSound('sfx/voice/shaggy4.sound');
    preloadSound('sfx/voice/velma0.sound');
    preloadSound('sfx/voice/velma1.sound');
    preloadSound('sfx/voice/velma2.sound');
    preloadSound('sfx/voice/velma3.sound');
    preloadSound('sfx/voice/velma4.sound');
    //Preload Movies
    const videosToPreload = [
        'gfx/movies/demo_end.mp4',
        'gfx/movies/intro',
        'gfx/movies/room_carousel_ghost_appear',
        'gfx/movies/room_carousel2_ghost_appear',
        'gfx/movies/room_garden_ghost_appear',
        'gfx/movies/room_hall_ghost_appear'
    ];
    videosToPreload.forEach((src) => {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'auto';
        video.muted = true; // fontos, hogy ne blokkolja a böngésző
        video.load();
    });
    //Remove New Game Button
    document.getElementById("NewGameButton").remove();
    //Movie
    document.getElementById("canvas").innerHTML = `<video id="movie" autoplay muted loop playsinline style="width: 100%; height: auto;">
            <source src="gfx/movies/intro.movie" type="video/mp4">
            Movie fail.
        </video>`
    music.src = "sfx/music/intro.sound";
    music.play();
    setTimeout(() => {
        NewGame();
    }, 8500);
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && intro_skip === true) {
            NewGame();
        }
        if (event.key === "Escape" && intro_skip === true) {
            NewGame();
        }
      });
}

function Setup2() 
{
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_mainmenu.image')";
}

Setup2();

document.getElementById("NewGameButton").addEventListener('mouseenter', () => {
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_mainmenu2.image')";
  });

document.getElementById("NewGameButton").addEventListener('mouseleave', () => {
    document.getElementById("canvas").style.backgroundImage = "url('gfx/rooms/room_mainmenu.image')";
});

function GetScoobySnack() 
{
    scooby_snacks = scooby_snacks + 1;
    document.getElementById("scooby_snacks_counter").innerHTML = scooby_snacks;
    room_hall_version = 2;
}




















//TicTacToe

var field_states = [];

var chooseable_fields = [1,2,3,4,5,6,7,8,9]

var empty_field = "-"

var x_field = "x"

var o_field = "o"

var ttt_difficulty = 1;

var ttt_original_color = "white";

var ttt_busy_color = "lightgray";

var ttt_win_color = "lightblue";

var ttt_original_border_color = "black";

var game_ended = false;

function ResetTTT() {
    game_ended = false;
    field_states = [];
    chooseable_fields = [1,2,3,4,5,6,7,8,9]
    for(let i = 0; i < 9; i++) {
        field_states[i] = empty_field;
    }
    document.getElementById("btn_ttt1").style.color = "lightgray";
    document.getElementById("btn_ttt2").style.color = "lightgray";
    document.getElementById("btn_ttt3").style.color = "lightgray";
    document.getElementById("btn_ttt4").style.color = "lightgray";
    document.getElementById("btn_ttt5").style.color = "lightgray";
    document.getElementById("btn_ttt6").style.color = "lightgray";
    document.getElementById("btn_ttt7").style.color = "lightgray";
    document.getElementById("btn_ttt8").style.color = "lightgray";
    document.getElementById("btn_ttt9").style.color = "lightgray";
    document.getElementById("btn_ttt1").disabled = false;
    document.getElementById("btn_ttt2").disabled = false;
    document.getElementById("btn_ttt3").disabled = false;
    document.getElementById("btn_ttt4").disabled = false;
    document.getElementById("btn_ttt5").disabled = false;
    document.getElementById("btn_ttt6").disabled = false;
    document.getElementById("btn_ttt7").disabled = false;
    document.getElementById("btn_ttt8").disabled = false;
    document.getElementById("btn_ttt9").disabled = false;
    document.getElementById("btn_ttt1").innerHTML = empty_field;
    document.getElementById("btn_ttt2").innerHTML = empty_field;
    document.getElementById("btn_ttt3").innerHTML = empty_field;
    document.getElementById("btn_ttt4").innerHTML = empty_field;
    document.getElementById("btn_ttt5").innerHTML = empty_field;
    document.getElementById("btn_ttt6").innerHTML = empty_field;
    document.getElementById("btn_ttt7").innerHTML = empty_field;
    document.getElementById("btn_ttt8").innerHTML = empty_field;
    document.getElementById("btn_ttt9").innerHTML = empty_field;
    BotChooseRandom();
}

ResetTTT();

function BotChooseRandom() {
    bot_choosen_field = chooseable_fields[Math.floor(Math.random() * chooseable_fields.length)];
    if(bot_choosen_field == 1) 
    {
        BOTChooseField1();
    }
    else if(bot_choosen_field == 2) 
    {
        BOTChooseField2();
    }
    else if(bot_choosen_field == 3) 
    {
        BOTChooseField3();
    }
    else if(bot_choosen_field == 4) 
    {
        BOTChooseField4();
    }
    else if(bot_choosen_field == 5) 
    {
        BOTChooseField5();
    }
    else if(bot_choosen_field == 6) 
    {
        BOTChooseField6();
    }
    else if(bot_choosen_field == 7) 
    {
        BOTChooseField7();
    }
    else if(bot_choosen_field == 8) 
    {
        BOTChooseField8();
    }
    else if(bot_choosen_field == 9) 
    {
        BOTChooseField9();
    }
}

function BotChooseClever() {
    //Check Bot Can Stop Player Win
    if(field_states[0] == x_field && field_states[1] == x_field) 
    {
        chooseable_fields.push(3);
    }
    if(field_states[0] == x_field && field_states[2] == x_field) 
    {
        chooseable_fields.push(2);
    }
    if(field_states[1] == x_field && field_states[2] == x_field) 
    {
        chooseable_fields.push(1);
    }

    if(field_states[3] == x_field && field_states[4] == x_field) 
    {
        chooseable_fields.push(6);
    }
    if(field_states[3] == x_field && field_states[5] == x_field) 
    {
        chooseable_fields.push(5);
    }
    if(field_states[4] == x_field && field_states[5] == x_field) 
    {
        chooseable_fields.push(4);
    }
   
    if(field_states[6] == x_field && field_states[7] == x_field) 
    {
        chooseable_fields.push(9);
    }
    if(field_states[6] == x_field && field_states[8] == x_field) 
    {
        chooseable_fields.push(8);
    }
    if(field_states[7] == x_field && field_states[8] == x_field) 
    {
        chooseable_fields.push(7);
    }

    if(field_states[0] == x_field && field_states[3] == x_field) 
    {
        chooseable_fields.push(7);
    }
    if(field_states[0] == x_field && field_states[6] == x_field) 
    {
        chooseable_fields.push(4);
    }
    if(field_states[3] == x_field && field_states[6] == x_field) 
    {
        chooseable_fields.push(1);
    }

    if(field_states[1] == x_field && field_states[4] == x_field) 
    {
        chooseable_fields.push(8);
    }
    if(field_states[1] == x_field && field_states[7] == x_field) 
    {
        chooseable_fields.push(5);
    }
    if(field_states[4] == x_field && field_states[7] == x_field) 
    {
        chooseable_fields.push(2);
    }

    if(field_states[2] == x_field && field_states[5] == x_field) 
    {
        chooseable_fields.push(9);
    }
    if(field_states[2] == x_field && field_states[8] == x_field) 
    {
        chooseable_fields.push(6);
    }
    if(field_states[5] == x_field && field_states[8] == x_field) 
    {
        chooseable_fields.push(3);
    }

    if(field_states[0] == x_field && field_states[4] == x_field) 
    {
        chooseable_fields.push(9);
    }
    if(field_states[0] == x_field && field_states[8] == x_field) 
    {
        chooseable_fields.push(5);
    }
    if(field_states[4] == x_field && field_states[8] == x_field) 
    {
        chooseable_fields.push(1);
    }

    if(field_states[6] == x_field && field_states[4] == x_field) 
    {
        chooseable_fields.push(3);
    }
    if(field_states[6] == x_field && field_states[2] == x_field) 
    {
        chooseable_fields.push(5);
    }
    if(field_states[4] == x_field && field_states[2] == x_field) 
    {
        chooseable_fields.push(7);
    }



    //Check Bot Can Win
    if(field_states[0] == o_field && field_states[1] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[0] == o_field && field_states[2] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[1] == o_field && field_states[2] == o_field) 
    {
        chooseable_fields = [];
    }

    if(field_states[3] == o_field && field_states[4] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[3] == o_field && field_states[5] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[4] == o_field && field_states[5] == o_field) 
    {
        chooseable_fields = [];
    }
   
    if(field_states[6] == o_field && field_states[7] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[6] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[7] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields = [];
    }

    if(field_states[0] == o_field && field_states[3] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[0] == o_field && field_states[6] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[3] == o_field && field_states[6] == o_field) 
    {
        chooseable_fields = [];
    }

    if(field_states[1] == o_field && field_states[4] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[1] == o_field && field_states[7] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[4] == o_field && field_states[7] == o_field) 
    {
        chooseable_fields = [];
    }

    if(field_states[2] == o_field && field_states[5] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[2] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[5] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields = [];
    }

    if(field_states[0] == o_field && field_states[4] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[0] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[4] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields = [];
    }

    if(field_states[6] == o_field && field_states[4] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[6] == o_field && field_states[2] == o_field) 
    {
        chooseable_fields = [];
    }
    if(field_states[4] == o_field && field_states[2] == o_field) 
    {
        chooseable_fields = [];
    }




    
    if(field_states[0] == o_field && field_states[1] == o_field) 
    {
        chooseable_fields.push(3);
    }
    if(field_states[0] == o_field && field_states[2] == o_field) 
    {
        chooseable_fields.push(2);
    }
    if(field_states[1] == o_field && field_states[2] == o_field) 
    {
        chooseable_fields.push(1);
    }

    if(field_states[3] == o_field && field_states[4] == o_field) 
    {
        chooseable_fields.push(6);
    }
    if(field_states[3] == o_field && field_states[5] == o_field) 
    {
        chooseable_fields.push(5);
    }
    if(field_states[4] == o_field && field_states[5] == o_field) 
    {
        chooseable_fields.push(4);
    }
   
    if(field_states[6] == o_field && field_states[7] == o_field) 
    {
        chooseable_fields.push(9);
    }
    if(field_states[6] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields.push(8);
    }
    if(field_states[7] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields.push(7);
    }

    if(field_states[0] == o_field && field_states[3] == o_field) 
    {
        chooseable_fields.push(7);
    }
    if(field_states[0] == o_field && field_states[6] == o_field) 
    {
        chooseable_fields.push(4);
    }
    if(field_states[3] == o_field && field_states[6] == o_field) 
    {
        chooseable_fields.push(1);
    }

    if(field_states[1] == o_field && field_states[4] == o_field) 
    {
        chooseable_fields.push(8);
    }
    if(field_states[1] == o_field && field_states[7] == o_field) 
    {
        chooseable_fields.push(5);
    }
    if(field_states[4] == o_field && field_states[7] == o_field) 
    {
        chooseable_fields.push(2);
    }

    if(field_states[2] == o_field && field_states[5] == o_field) 
    {
        chooseable_fields.push(9);
    }
    if(field_states[2] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields.push(6);
    }
    if(field_states[5] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields.push(3);
    }

    if(field_states[0] == o_field && field_states[4] == o_field) 
    {
        chooseable_fields.push(9);
    }
    if(field_states[0] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields.push(5);
    }
    if(field_states[4] == o_field && field_states[8] == o_field) 
    {
        chooseable_fields.push(1);
    }

    if(field_states[6] == o_field && field_states[4] == o_field) 
    {
        chooseable_fields.push(3);
    }
    if(field_states[6] == o_field && field_states[2] == o_field) 
    {
        chooseable_fields.push(5);
    }
    if(field_states[4] == o_field && field_states[2] == o_field) 
    {
        chooseable_fields.push(7);
    }
}

function BotChoosingField() {
    //Clear Chooseable Fields List
    chooseable_fields = [];
    //Bot is clever or not?
    let bot_clever = Math.floor(Math.random() * 1) + 1;
    if(bot_clever == 1)//If bot not clever
    {
        //Check Chooseable Fields
        if(field_states[0] == empty_field) 
        {
            chooseable_fields.push(1);
        }
        if(field_states[1] == empty_field) 
        {
            chooseable_fields.push(2);
        }
        if(field_states[2] == empty_field) 
        {
            chooseable_fields.push(3);
        }
        if(field_states[3] == empty_field) 
        {
            chooseable_fields.push(4);
        }
        if(field_states[4] == empty_field) 
        {
            chooseable_fields.push(5);
        }
        if(field_states[5] == empty_field) 
        {
            chooseable_fields.push(6);
        }
        if(field_states[6] == empty_field) 
        {
            chooseable_fields.push(7);
        }
        if(field_states[7] == empty_field) 
        {
            chooseable_fields.push(8);
        }
        if(field_states[8] == empty_field) 
        {
            chooseable_fields.push(9);
        }
        BotChooseRandom();
    }
    else if(bot_clever > 1)//If bot clever
    {
        BotChooseClever();
    }
}

function ChooseField1() {
    if(field_states[0] == empty_field) 
    {
        document.getElementById("btn_ttt1").style.borderColor = ttt_busy_color;
        field_states[0] = x_field;
        document.getElementById("btn_ttt1").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}
function ChooseField2() {
    if(field_states[1] == empty_field) 
    {
        document.getElementById("btn_ttt2").style.borderColor = ttt_busy_color;
        field_states[1] = x_field;
        document.getElementById("btn_ttt2").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}
function ChooseField3() {
    if(field_states[2] == empty_field) 
    {
        document.getElementById("btn_ttt3").style.borderColor = ttt_busy_color;
        field_states[2] = x_field;
        document.getElementById("btn_ttt3").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}
function ChooseField4() {
    if(field_states[3] == empty_field) 
    {
        document.getElementById("btn_ttt4").style.borderColor = ttt_busy_color;
        field_states[3] = x_field;
        document.getElementById("btn_ttt4").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}
function ChooseField5() {
    if(field_states[4] == empty_field) 
    {
        document.getElementById("btn_ttt5").style.borderColor = ttt_busy_color;
        field_states[4] = x_field;
        document.getElementById("btn_ttt5").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}
function ChooseField6() {
    if(field_states[5] == empty_field) 
    {
        document.getElementById("btn_ttt6").style.borderColor = ttt_busy_color;
        field_states[5] = x_field;
        document.getElementById("btn_ttt6").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}
function ChooseField7() {
    if(field_states[6] == empty_field) 
    {
        document.getElementById("btn_ttt7").style.borderColor = ttt_busy_color;
        field_states[6] = x_field;
        document.getElementById("btn_ttt7").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}
function ChooseField8() {
    if(field_states[7] == empty_field) 
    {
        document.getElementById("btn_ttt8").style.borderColor = ttt_busy_color;
        field_states[7] = x_field;
        document.getElementById("btn_ttt8").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}
function ChooseField9() {
    if(field_states[8] == empty_field) 
    {
        document.getElementById("btn_ttt9").style.borderColor = ttt_busy_color;
        field_states[8] = x_field;
        document.getElementById("btn_ttt9").innerHTML = "X";
        if(!CheckWin()) 
        {
            BotChoosingField();
        }
    }
}

function BOTChooseField1() {
    document.getElementById("btn_ttt1").style.borderColor = ttt_busy_color;
    field_states[0] = o_field;
    document.getElementById("btn_ttt1").innerHTML = "O";
    CheckWin();
}
function BOTChooseField2() {
    document.getElementById("btn_ttt2").style.borderColor = ttt_busy_color;
    field_states[1] = o_field;
    document.getElementById("btn_ttt2").innerHTML = "O";
    CheckWin();
}
function BOTChooseField3() {
    document.getElementById("btn_ttt3").style.borderColor = ttt_busy_color;
    field_states[2] = o_field;
    document.getElementById("btn_ttt3").innerHTML = "O";
    CheckWin();
}
function BOTChooseField4() {
    document.getElementById("btn_ttt4").style.borderColor = ttt_busy_color;
    field_states[3] = o_field;
    document.getElementById("btn_ttt4").innerHTML = "O";
    CheckWin();
}
function BOTChooseField5() {
    document.getElementById("btn_ttt5").style.borderColor = ttt_busy_color;
    field_states[4] = o_field;
    document.getElementById("btn_ttt5").innerHTML = "O";
    CheckWin();
}
function BOTChooseField6() {
    document.getElementById("btn_ttt6").style.borderColor = ttt_busy_color;
    field_states[5] = o_field;
    document.getElementById("btn_ttt6").innerHTML = "O";
    CheckWin();
}
function BOTChooseField7() {
    document.getElementById("btn_ttt7").style.borderColor = ttt_busy_color;
    field_states[6] = o_field;
    document.getElementById("btn_ttt7").innerHTML = "O";
    CheckWin();
}
function BOTChooseField8() {
    document.getElementById("btn_ttt8").style.borderColor = ttt_busy_color;
    field_states[7] = o_field;
    document.getElementById("btn_ttt8").innerHTML = "O";
    CheckWin();
}
function BOTChooseField9() {
    document.getElementById("btn_ttt9").style.borderColor = ttt_busy_color;
    field_states[8] = o_field;
    document.getElementById("btn_ttt9").innerHTML = "O";
    CheckWin();
}

function SetDifficulty() {
    const ttt_selected_difficulty = document.getElementById("ttt_difficulty_select").value;
    if(ttt_selected_difficulty === "ttt_easy") 
    {
        ttt_difficulty = 1;
    }
    else if(ttt_selected_difficulty === "ttt_normal") 
    {
        ttt_difficulty = 2;
    }
    else if(ttt_selected_difficulty === "ttt_hard") 
    {
        ttt_difficulty = 3;
    }
    else if(ttt_selected_difficulty === "ttt_very_hard") 
    {
        ttt_difficulty = 4;
    }
}

function CheckWin() {
    //Check X (Player) Win
    let has_winner = false;
    let is_board_is_full = true;
    if(field_states[0] == x_field && field_states[1] == x_field && field_states[2] == x_field) 
    {
        document.getElementById("btn_ttt1").style.color = ttt_win_color;
        document.getElementById("btn_ttt2").style.color = ttt_win_color;
        document.getElementById("btn_ttt3").style.color = ttt_win_color;
        has_winner = true;
        GetScoobySnack();
    }
    else if(field_states[3] == x_field && field_states[4] == x_field && field_states[5] == x_field) 
    {
        document.getElementById("btn_ttt4").style.color = ttt_win_color;
        document.getElementById("btn_ttt5").style.color = ttt_win_color;
        document.getElementById("btn_ttt6").style.color = ttt_win_color;
        has_winner = true;
        GetScoobySnack();
    }
    else if(field_states[6] == x_field && field_states[7] == x_field && field_states[8] == x_field) 
    {
        document.getElementById("btn_ttt7").style.color = ttt_win_color;
        document.getElementById("btn_ttt8").style.color = ttt_win_color;
        document.getElementById("btn_ttt9").style.color = ttt_win_color;
        has_winner = true;
        GetScoobySnack();
    }
    else if(field_states[0] == x_field && field_states[3] == x_field && field_states[6] == x_field) 
    {
        document.getElementById("btn_ttt1").style.color = ttt_win_color;
        document.getElementById("btn_ttt4").style.color = ttt_win_color;
        document.getElementById("btn_ttt7").style.color = ttt_win_color;
        has_winner = true;
        GetScoobySnack();
    }
    else if(field_states[1] == x_field && field_states[4] == x_field && field_states[7] == x_field) 
    {
        document.getElementById("btn_ttt2").style.color = ttt_win_color;
        document.getElementById("btn_ttt5").style.color = ttt_win_color;
        document.getElementById("btn_ttt8").style.color = ttt_win_color;
        has_winner = true;
        GetScoobySnack();
    }
    else if(field_states[2] == x_field && field_states[5] == x_field && field_states[8] == x_field) 
    {
        document.getElementById("btn_ttt3").style.color = ttt_win_color;
        document.getElementById("btn_ttt6").style.color = ttt_win_color;
        document.getElementById("btn_ttt9").style.color = ttt_win_color;
        has_winner = true;
        GetScoobySnack();
    }
    else if(field_states[0] == x_field && field_states[4] == x_field && field_states[8] == x_field) 
    {
        document.getElementById("btn_ttt1").style.color = ttt_win_color;
        document.getElementById("btn_ttt5").style.color = ttt_win_color;
        document.getElementById("btn_ttt9").style.color = ttt_win_color;
        has_winner = true;
        GetScoobySnack();
    }
    else if(field_states[2] == x_field && field_states[4] == x_field && field_states[6] == x_field) 
    {
        document.getElementById("btn_ttt3").style.color = ttt_win_color;
        document.getElementById("btn_ttt5").style.color = ttt_win_color;
        document.getElementById("btn_ttt7").style.color = ttt_win_color;
        has_winner = true;
        GetScoobySnack();
    }
    //Check O (BOT) Win
    if(field_states[0] == o_field && field_states[1] == o_field && field_states[2] == o_field) 
    {
        document.getElementById("btn_ttt1").style.color = ttt_win_color;
        document.getElementById("btn_ttt2").style.color = ttt_win_color;
        document.getElementById("btn_ttt3").style.color = ttt_win_color;
        has_winner = true;
    }
    else if(field_states[3] == o_field && field_states[4] == o_field && field_states[5] == o_field) 
    {
        document.getElementById("btn_ttt4").style.color = ttt_win_color;
        document.getElementById("btn_ttt5").style.color = ttt_win_color;
        document.getElementById("btn_ttt6").style.color = ttt_win_color;
        has_winner = true;
    }
    else if(field_states[6] == o_field && field_states[7] == o_field && field_states[8] == o_field) 
    {
        document.getElementById("btn_ttt7").style.color = ttt_win_color;
        document.getElementById("btn_ttt8").style.color = ttt_win_color;
        document.getElementById("btn_ttt9").style.color = ttt_win_color;
        has_winner = true;
    }
    else if(field_states[0] == o_field && field_states[3] == o_field && field_states[6] == o_field) 
    {
        document.getElementById("btn_ttt1").style.color = ttt_win_color;
        document.getElementById("btn_ttt4").style.color = ttt_win_color;
        document.getElementById("btn_ttt7").style.color = ttt_win_color;
        has_winner = true;
    }
    else if(field_states[1] == o_field && field_states[4] == o_field && field_states[7] == o_field) 
    {
        document.getElementById("btn_ttt2").style.color = ttt_win_color;
        document.getElementById("btn_ttt5").style.color = ttt_win_color;
        document.getElementById("btn_ttt8").style.color = ttt_win_color;
        has_winner = true;
    }
    else if(field_states[2] == o_field && field_states[5] == o_field && field_states[8] == o_field) 
    {
        document.getElementById("btn_ttt3").style.color = ttt_win_color;
        document.getElementById("btn_ttt6").style.color = ttt_win_color;
        document.getElementById("btn_ttt9").style.color = ttt_win_color;
        has_winner = true;
    }
    else if(field_states[0] == o_field && field_states[4] == o_field && field_states[8] == o_field) 
    {
        document.getElementById("btn_ttt1").style.color = ttt_win_color;
        document.getElementById("btn_ttt5").style.color = ttt_win_color;
        document.getElementById("btn_ttt9").style.color = ttt_win_color;
        has_winner = true;
    }
    else if(field_states[2] == o_field && field_states[4] == o_field && field_states[6] == o_field) 
    {
        document.getElementById("btn_ttt3").style.color = ttt_win_color;
        document.getElementById("btn_ttt5").style.color = ttt_win_color;
        document.getElementById("btn_ttt7").style.color = ttt_win_color;
        has_winner = true;
    }
    if(has_winner == true) 
    {
        game_ended = true;
        GetPlayAgain();
        document.getElementById("btn_ttt1").disabled = true;
        document.getElementById("btn_ttt2").disabled = true;
        document.getElementById("btn_ttt3").disabled = true;
        document.getElementById("btn_ttt4").disabled = true;
        document.getElementById("btn_ttt5").disabled = true;
        document.getElementById("btn_ttt6").disabled = true;
        document.getElementById("btn_ttt7").disabled = true;
        document.getElementById("btn_ttt8").disabled = true;
        document.getElementById("btn_ttt9").disabled = true;
    }
    for(let i = 0;i < field_states.length; i++) 
    {
        if(field_states[i] == empty_field) 
        {
            is_board_is_full = false;
        }
    }
    if(has_winner == false && is_board_is_full == true)
    {
        game_ended = true;
        GetPlayAgain();
        document.getElementById("btn_ttt1").disabled = true;
        document.getElementById("btn_ttt2").disabled = true;
        document.getElementById("btn_ttt3").disabled = true;
        document.getElementById("btn_ttt4").disabled = true;
        document.getElementById("btn_ttt5").disabled = true;
        document.getElementById("btn_ttt6").disabled = true;
        document.getElementById("btn_ttt7").disabled = true;
        document.getElementById("btn_ttt8").disabled = true;
        document.getElementById("btn_ttt9").disabled = true;
    }
    return has_winner;
}

function GetPlayAgain() {
    //Remove Cursor
    document.body.classList.add("cursor-hidden");
    setTimeout(() => {
        //Set Cursor
        document.body.classList.remove("cursor-hidden");
        ResetTTT();
    }, room_entering_timeout);
}

function TTTRestart() {
    if(game_ended == true)
    {
        ResetTTT();
        BotChooseRandom();
    }
}





