const getCardHTML = (cardIndex) => {
    return `<div id="capture-card" class="card">
    <h2>#${parseInt(cardIndex) + 1}: ${captureData[cardIndex].name}</h2>
    <img src="${captureData[cardIndex].image}"> 
    <div class="accordion-body">
      <div class="accordion">
        <h1>Capture Information</h1>
        <hr>
        <div class="container">
          <div class="label">Controls</div>
          <div class="content">${captureData[cardIndex].controls}</div>
        </div>
        <hr>
        <div class="container">
          <div class="label">Locations</div>
          <div class="content">${captureData[cardIndex].locations}</div>
        </div>
        <hr>
        <div class="container">
          <div class="label">Fun Facts</div>
          <div class="content">${captureData[cardIndex].funFacts}</div>
        </div>
        <hr>
      </div>
    </div>       
  </div>`;
}

const setupAccordions = () => {
    const accordion = document.getElementsByClassName('container');
    for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
    }
}

document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.cards img')) return;
    
    // Don't follow the link
    event.preventDefault();
    
    // Log the clicked element in the console
    // console.log(event.target.id);
    // console.log(captureData[event.target.id].locations);
    // document.getElementById("capture-info").innerHTML =  captureData[event.target.id].name;
    document.getElementById("capture-card").innerHTML = getCardHTML(event.target.id);
    setupAccordions();
    
    }, false);

const captureData = [
    {
        name: 'Frog', 
        image: './images/SMO_Frog_Capture.png',
        controls: 'Left Stick = Move, B Button = Jump, Shake = High Jump',
        locations: 'Cap Kingdom, Lake Kingdom, Moon Kingdom, Darker Side',
        funFacts: 'On the moon, this capture has the highest jump.',
    },
    {
        name: 'Spark Pylon', 
        image: './images/SMO_Spark_pylon_Capture.png',
        controls: 'Left Stick / Shake =  Move',
        locations: 'Cap Kingdom, Cascade Kingdom, Sand Kingdom, Metro Kingdom, Ruined Kingdom, Bowser\'s Kingdom, Moon Kingdom, Dark Side, Darker Side',
        funFacts: 'By shaking, you can collect coins that are of to the side of the wires.',
    },
    {
        name: 'Paragoomba', 
        image: './images/SMO_Paragoomba_Capture.png',
        controls: 'B Button = Fly, Shake = Fly Faster',
        locations: 'Cap Kingdom, Wooded Kingdom',
        funFacts: 'Paragoombas have a limit on how high they can fly.',
    },
    {
        name: 'Chain Chomp', 
        image: './images/SMO_Chain_Chomp_Capture.png',
        controls: 'Pull Left Stick = Wind Up, Release Left Stick = Send Flying',
        locations: 'Cascade Kingdom',
        funFacts: 'Chain Chomps can collide with other Chain Chomps to set of a chain reaction.',
    },
    {
        name: 'Big Chain Chomp', 
        image: './images/SMO_Big_Chain_Chomp_Capture.png',
        controls: 'Pull Left Stick = Wind Up, Release Left Stick = Send Flying',
        locations: 'Cascade Kingdom',
        funFacts: 'This capture only appears in one spot for the whole game.',
    },
    {
        name: 'Broode\'s Chain Chomp', 
        image: './images/SMO_Broode\'s_Chain_Chomp_Capture.png',
        controls: 'Pull Left Stick = Wind Up, Release Left Stick = Send Flying',
        locations: 'Cascade Kingdom, Moon Kingdom',
        funFacts: 'Madame Broode\'s Chain Chomp has a name: Chain Chompikins',
    },
    {
        name: 'T-Rex', 
        image: './images/SMO_T-Rex_Capture.png',
        controls: 'Left Stick + Y Button = Dash, B Button / Shake = Attack',
        locations: 'Cascade Kingdom, Wooded Kingdom, Metro Kingdom',
        funFacts: 'This is the largest capture in the game.',
    },
    {
        name: 'Binoculars', 
        image: './images/SMO_Binoculars_Capture.png',
        controls: 'Right Stick: Look Around, Y Button: Zoom, R Button: Reset',
        locations: 'Mushroom Kingdom, Cap Kingdom, Sand Kingdom, Wooded Kingdom, Lake Kingdom, Lost Kingdom, Metro Kingdom, Seaside Kingdom, Luncheon Kingdom, Bowser\'s Kingdom, Moon Kingdom, Dark Side, Darker Side',
        funFacts: 'In certain Kingdoms, you can zoom in on a Taxi or a Sphynx to get a Power Moon.',
    },
    {
        name: 'Bullet Bill', 
        image: './images/SMO_Bullet_Bill_Capture.png',
        controls: 'Hold Y Button: Accelerate, Shake: Accelerate More',
        locations: 'Sand Kingdom, Wooded Kingdom, Metro Kingdom, Moon Kingdom, Dark Side',
        funFacts: 'Bullet Bills can only be used temperally before they explode.',
    },
    {
        name: 'Moe-Eye', 
        image: './images/SMO_Moe-Eye_Capture.png',
        controls: 'Y Button: Put On / Take Off Shades',
        locations: 'Sand Kingdom, Moon Kingdom',
        funFacts: 'When standing idle with its shades on, Moe-Eye will hum different Mario tunes.',
    },
    {
        name: 'Cactus', 
        image: './images/SMO_Cactus_Capture.png',
        controls: 'Left Stick: Move',
        locations: 'Sand Kingdom',
        funFacts: 'This capture is only used for one Power Moon.',
    },
    {
        name: 'Goomba', 
        image: './images/SMO_Goomba_Capture.png',
        controls: 'Left Stick + Y Button: Dash, B Button: Jump, Shake: High Jump',
        locations: 'Mushroom Kingdom, Sand Kingdom, Wooded Kingdom, Lake Kingdom, Metro Kingdom, Snow Kingdom, Seaside Kingdom, Luncheon Kingdom, Bowser\'s Kingdom, Darker Side',
        funFacts: 'To get a Power Moon from Goombette, you must approach as a Goomba.',
    },
    {
        name: 'Knucklotec\'s Fist', 
        image: './images/SMO_Knucklotec\'s_Fist_Capture.png',
        controls: 'Hold Y Button: Accelerate, Shake: Accelerate More',
        locations: 'Mushroom Kingdom, Sand Kingdom',
        funFacts: 'This capture has the same functionality as a Banzai Bill.',
    },
        {
        name: 'Mini Rocket', 
        image: './images/SMO_Mini_Rocket_Capture.png',
        controls: 'Hold B Button: Launch',
        locations: 'Mushroom Kingdom, Sand Kingdom, Wooded Kingdom, Seaside Kingdom, Ruined Kingdom,',
        funFacts: 'All this caputre does is take you to a sub-area.',
    },
    {
        name: 'Glydon', 
        image: './images/SMO_Glydon_Capture.png',
        controls: 'Hold B Button: Glide',
        locations: 'Sand Kingdom, Wooded Kingdom, Lost Kingdom, Seaside Kingdom, Darker Side',
        funFacts: 'If you shake the controllers, Glydon can gain a tiny bit of height.',
    },
    {
        name: 'Lakitu', 
        image: './images/SMO_Lakitu_Capture.png',
        controls: 'Y Button: Lower / Raise Line',
        locations: 'Sand Kingdom, Lake Kingdom, Snow Kingdom, Bowser\'s Kingdom',
        funFacts: 'Instead of hurling Spinies, Lakitu goes fishing for Cheep Cheeps instead.',
    },
    {
        name: 'Zipper', 
        image: './images/SMO_Zipper_Capture.png',
        controls: 'L Stick: Move',
        locations: 'Lake Kingdom',
        funFacts: 'This capture can uncover hidden areas.',
    },
    {
        name: 'Cheep Cheep', 
        image: './images/SMO_Cheep_Cheep_Capture.png',
        controls: 'Y Button: Dive, B Button: Surface, Shake: Attack',
        locations: 'Lake Kingdom, Seaside Kingdom',
        funFacts: 'By pressing the Y and B Button together, Cheep Cheep will swim faster.',
    },
    {
        name: 'Puzzle Part (Lake Kingdom)', 
        image: './images/SMO_Puzzle_Part_(Lake_Kingdom)_Capture.png',
        controls: 'L Stick: Move',
        locations: 'Lake Kingdom',
        funFacts: 'This capture is just used to help out a Lochlady.',
    },
    {
        name: 'Poison Pirahna Plant', 
        image: './images/SMO_Piranha_Plant_Capture.png',
        controls: 'Y Button: Spit, Shake: Spit Farther and Faster',
        locations: 'Wooded Kingdom, Metro Kingdom, Dark Side',
        funFacts: 'To capture this plant, you must throw a rock in its mouth first.',
    },
    {
        name: 'Uproot', 
        image: './images/SMO_Uproot_Capture.png',
        controls: 'Hold B Button: Strech, Shake: Strech Farther',
        locations: 'Mushroom Kingdom, Wooded Kingdom, Seaside Kingdom, Darker Side',
        funFacts: 'Uproot is used to defeat the boss Torkdrift.',
    },
    {
        name: 'Fire Bro', 
        image: './images/SMO_Fire_Bro_Capture.png',
        controls: 'Y Button: Throw, B Button: Jump, Shake: Throw Faster',
        locations: 'Wooded Kingdom, Luncheon Kingdom',
        funFacts: 'Fire Bro\'s fireballs can instanly destroy nuts.',
    },
    {
        name: 'Sherm', 
        image: './images/SMO_Sherm_Capture.png',
        controls: 'Right Stick: Aim, Y Button: Shoot',
        locations: 'Mushroom Kingdom, Wooded Kingdom, Metro Kingdom, Moon Kingdom, Dark Side',
        funFacts: 'Sherms can destroy Taxis in the Metro Kingdom',
    },
    {
        name: 'Coin Coffer', 
        image: './images/SMO_Coin_Coffer_Capture.png',
        controls: 'Y Button: Shoot, B Button: Jump, Shake: Scatter Coins',
        locations: 'Sand Kingdom, Wooded Kingdom',
        funFacts: 'By shooting 500 coins at a plant in the Deep Woods, Coin Coffer will get a Power Moon.',
    },
    {
        name: 'Tree', 
        image: './images/SMO_Tree_Capture.png',
        controls: 'Left Stick: Move',
        locations: 'Wooded Kingdom',
        funFacts: 'This capture is only used to get a Power Moon.',
    },
    {
        name: 'Boulder', 
        image: './images/SMO_Boulder_Capture.png',
        controls: 'Left Stick: Move',
        locations: 'Wooded Kingdom',
        funFacts: 'This capture is only used to get some Regional Coins.',
    },
    {
        name: 'Picture Match Part (Goomba)', 
        image: './images/SMO_Picture_Match_Part_(Goomba)_Capture.png',
        controls: 'Y Button: Rotate Left, B Button: Rotate Right, ZL Button: Place',
        locations: 'Cloud Kingdom',
        funFacts: 'You take control of the Goomba\'s facial parts.',
    },
    {
        name: 'Tropical Wiggler', 
        image: './images/SMO_Tropical_Wiggler_Capture.png',
        controls: 'Left Stick + Y Button: Stretch, Shake: Stretch Faster',
        locations: 'Lost Kingdom, Moon Kingdom',
        funFacts: 'While streching, Tropical Wigglers sound like an accordion.',
    },
    {
        name: 'Pole', 
        image: './images/SMO_Pole_Capture.png',
        controls: 'Left Stick: Flick, Shake: Flick Farther',
        locations: 'Metro Kingdom',
        funFacts: 'This capture is the fastest way to gain speed in the game.',
    },
    {
        name: 'Manhole', 
        image: './images/SMO_Manhole_Capture.png',
        controls: 'Left Stick: Move',
        locations: 'Metro Kingdom',
        funFacts: 'By removing the Manhole covers, you can explore the underground sewers.',
    },
    {
        name: 'Taxi', 
        image: './images/SMO_Taxi_Capture.png',
        controls: 'Left Stick: Move',
        locations: 'Metro Kingdom',
        funFacts: 'This Taxi only takes you to a sub-area.',
    },
    {
        name: 'RC Car', 
        image: './images/SMO_RC_Car_Capture.png',
        controls: 'Left Stick: Accelerate, Right Stick: Steer',
        locations: 'Metro Kingdom',
        funFacts: 'You don\'t actually capture the car; instead you capture a human who controls the car.',
    },
    {
        name: 'Ty-Foo', 
        image: './images/SMO_Ty-foo_Capture.png',
        controls: 'Hold Y Button: Exhale, Shake: Blow Harder',
        locations: 'Snow Kingdom',
        funFacts: 'Ty-Foos can push large blocks to uncover secrets.',
    },
    {
        name: 'Shiverian Racer', 
        image: './images/SMO_Shiverian_Racer_Capture.png',
        controls: 'B Button / Shake: Bound',
        locations: 'Snow Kingdom',
        funFacts: 'You use this capture to participate in the Snow Kingdom races.',
    },
    {
        name: 'Cheep Cheep (Snow Kingdom)', 
        image: './images/SMO_Cheep_Cheep_(Snow_Kingdom)_Capture.png',
        controls: 'Y Button: Dive, B Button: Surface, Shake: Attack, Y Button + B Button: Swim Faster',
        locations: 'Snow Kingdom',
        funFacts: 'It\'s exactly the same as a normal Cheep Cheep, except for the color.',
    },
    {
        name: 'Gushen', 
        image: './images/SMO_Gushen_Capture.png',
        controls: 'Hold Y Button: Jet Forward, Hold B Button: Jet Upward, Shake: Spray in all Directions',
        locations: 'Mushroom Kingdom, Sand Kingdom, Seaside Kingdom',
        funFacts: 'Gushens can refill water by collecting a heart, or a Power Moon.',
    },
    {
        name: 'Lava Bubble', 
        image: './images/SMO_Lava_Bubble_Capture.png',
        controls: 'Left Stick + Y Button: Dash, B Button: Jump, Shake: Dash Faster',
        locations: 'Mushroom Kingdom, Lost Kingdom, Luncheon Kingdom, Darker Side',
        funFacts: 'Lava Bubbles can swim on land if it\'s covered by a Magmato\'s liquid.',
    },
    {
        name: 'Volbonan', 
        image: './images/SMO_Volbonan_Capture.png',
        controls: 'Left Stick: Flick, Shake: Flick Farther',
        locations: 'Mushroom Kingdom, Metro Kingdom, Seaside Kingdom, Luncheon Kingdom, Darker Side',
        funFacts: 'Unlike the poles, Volbonans can only rotate 180 degrees instead of a full 360.',
    },
    {
        name: 'Hammer Bro', 
        image: './images/SMO_Hammer_Bro_Capture.png',
        controls: 'Y Button: Throw, B Button: Jump, Shake: Throw Faster',
        locations: 'Metro Kingdom, Luncheon Kingdom, Moon Kingdom, Dark Side',
        funFacts: 'Hammer Bros throw Frying Pans instead of hammers in the Luncheon Kingdom.',
    },
    {
        name: 'Meat', 
        image: './images/SMO_Meat_Capture.png',
        controls: 'B Button: Twitch',
        locations: 'Luncheon Kingdom',
        funFacts: 'This capture is only used once in the entire game, and never again.',
    },
    {
        name: 'Fire Pirahna Plant', 
        image: './images/SMO_Piranha_Plant_Capture.png',
        controls: 'Y Button: Spit, Shake: Spit Farther and Faster',
        locations: 'Lost Kingdom, Metro Kingdom, Luncheon Kingdom, Dark Side',
        funFacts: 'Like the Poison Pirahna Plant, you must throw a rock in its mouth to capture it.',
    },
    {
        name: 'Pokio', 
        image: './images/SMO_Pokio_Capture.png',
        controls: 'Y Button: Poke, B Button: Jump',
        locations: 'Seaside Kingdom, Bowser\'s Kingdom',
        funFacts: 'As long as you stick to a wall, Pokio will stay on that wall forever until you let go.',
    },
    {
        name: 'Jizo', 
        image: './images/SMO_Jizo_Capture.png',
        controls: 'Left Stick + Y Button: Dash, Shake: Dash Faster',
        locations: 'Bowser\'s Kingdom',
        funFacts: 'Jizos can uncover secrets in the ground, remain immune to spikes, and keep switches pressed.',
    },
    {
        name: 'Bowser Statue', 
        image: './images/SMO_Bowser_statue_Capture.png',
        controls: 'Left Stick: Move',
        locations: 'Moon Kingdom',
        funFacts: 'This capture is just used to uncover a Power Moon.',
    },
    {
        name: 'Parabones', 
        image: './images/SMO_Parabones_Capture.png',
        controls: 'B Button = Fly, Shake = Fly Faster',
        locations: 'Bowser\'s Kingdom, Moon Kingdom',
        funFacts: 'Parabones have the same properties as the Paragoomba, but they can\'t be killed.',
    },
    {
        name: 'Banzai Bill', 
        image: './images/SMO_Banzai_Bill_Capture.png',
        controls: 'Hold Y Button: Accelerate, Shake: Accelerate More',
        locations: 'Wooded Kingdom, Snow Kingdom, Moon Kingdom, Dark Side',
        funFacts: 'Banzai Bills can move super fast if you shake the controller.',
    },
    {
        name: 'Chargin\' Chuck', 
        image: './images/SMO_Chargin\'_Chuck_Capture.png',
        controls: 'Hold Y Button: Charge Up, Release Y Button: Tackle',
        locations: 'Ruined Kingdom, Moon Kingdom',
        funFacts: 'Chargin\' Chucks can destroy boulders, but they can\'t jump at all.',
    },
    {
        name: 'Bowser', 
        image: './images/SMO_Bowser_Capture.png',
        controls: 'Y Button: Attack, B Button: Jump, Shake: Breathe Fire',
        locations: 'Moon Kingdom, Darker Side',
        funFacts: 'Bowser is able to triple jump just like Mario.',
    },
    {
        name: 'Letter', 
        image: './images/SMO_Letter_Capture.png',
        controls: 'Left Stick + Y Button: Dash, Shake: Dash Faster',
        locations: 'Metro Kingdom',
        funFacts: 'The Letters were able to clip out of bounds at one point.',
    },
    {
        name: 'Puzzle Part (Metro Kingdom)', 
        image: './images/SMO_Puzzle_Part_(Metro_Kingdom)_Capture.png',
        controls: 'Left Stick: Move',
        locations: 'Metro Kingdom',
        funFacts: 'This capture is only used to power up the Metro Kingdom.',
    },
    {
        name: 'Picture Match Part (Mario)',
        image: './images/SMO_Picture_Match_Part_(Mario)_Capture.png',
        controls: 'Y Button: Rotate Left, B Button: Rotate Right, ZL Button: Place', 
        locations: 'Mushroom Kingdom',
        funFacts: 'You take control of Mario\'s facial parts.',
    },
    {
        name: 'Yoshi', 
        image: './images/SMO_Yoshi_Capture.png"',
        controls: 'Y Button / Shake: Extend Tongue, Hold B Button: Flutter Jump',
        locations: 'Mushroom Kingdom, Dark Side, Darker Side',
        funFacts: 'By sticking Yoshi\'s tongue to the ground, he will gain a little bit of speed.',
    },
    ]

setupAccordions();