const reviews = [
    {
      id: 1,
      name: 'kalpana chawla',
      job: 'first Indian - American astronaut and first Indian woman in space',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXD5JtO9-ttMO6GRDB1Ok33BG0tCaCky0Yow&s',
      text: "She first flew on Space Shuttle Columbia in 1997 as a mission specialist and primary robotic arm operator.",
    },
    {
      id: 2,
      name: ' pallavi jadhav',
      job: 'psi',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHOe2Dpcae6iz0fG-3EXpNav6fRv2v5PVpPQqGNVDdw&s',
      text: 'Chief Police Sub-inspector and head of Damini squad of Jalna police in Maharashtra, Pallavi Jadhav is a prominent celebrity on social media. Pallavi is a strong and independent police officer, who has become a role model for many young girls of the country.',
    },
    {
      id: 3,
      name: 'sai pallvai',
      job: 'STATE GOVERNMENT',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWn1GYzE-gUqWRRIccCfaCFWNZBucRFTLsWST6rQeZcA&s',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('name');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  let currentItem = 0;
 
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  randomBtn.addEventListener('click', function () {
    // console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });