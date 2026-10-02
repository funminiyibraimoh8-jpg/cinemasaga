// Sample movie data
const moviesData = {
  nowShowing: [
    {
      id: 1,
      title: "Dune: Part Two",
      genre: "Sci-Fi, Adventure",
      duration: "2h 46m",
      rating: "8.5",
      description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      poster: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      showtimes: ["10:30 AM", "1:45 PM", "5:15 PM", "8:45 PM"]
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi, Drama",
      duration: "2h 49m",
      rating: "8.7",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      showtimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"]
    },
    {
      id: 3,
      title: "The Batman",
      genre: "Action, Crime, Drama",
      duration: "2h 56m",
      rating: "7.8",
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
      poster: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      showtimes: ["12:00 PM", "3:30 PM", "7:00 PM", "10:15 PM"]
    },
    {
      id: 4,
      title: "Spider-Man: Across the Spider-Verse",
      genre: "Animation, Action, Adventure",
      duration: "2h 20m",
      rating: "8.7",
      description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
      poster: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:30 PM"]
    },
    {
      id: 5,
      title: "Oppenheimer",
      genre: "Biography, Drama, History",
      duration: "3h 00m",
      rating: "8.9",
      description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
      poster: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      showtimes: ["1:15 PM", "5:00 PM", "8:30 PM"]
    },
    {
      id: 6,
      title: "Gladiator II",
      genre: "Action, Adventure, Drama",
      duration: "2h 28m",
      rating: "6.5",
      description: "After his home is conquered by the tyrannical emperors, Lucius is forced to enter the Colosseum and must look to his past to find strength.",
      poster: "https://images.pexels.com/photos/1701201/pexels-photo-1701201.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      showtimes: ["11:15 AM", "2:45 PM", "6:15 PM", "9:45 PM"]
    },
    {
      id: 7,
      title: "Inside Out 2",
      genre: "Animation, Adventure, Comedy",
      duration: "1h 36m",
      rating: "7.6",
      description: "A teenager's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions!",
      poster: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      showtimes: ["10:15 AM", "12:30 PM", "3:15 PM", "5:45 PM"]
    }
  ],
  comingSoon: [
    {
      id: 8,
      title: "Avatar: Fire and Ash",
      genre: "Sci-Fi, Adventure, Fantasy",
      duration: "3h 10m",
      rating: "TBD",
      description: "The next chapter in the epic Pandora saga, exploring new biomes and clans across the alien moon.",
      poster: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      releaseDate: "December 18, 2025"
    },
    {
      id: 9,
      title: "Mission: Impossible - The Final Reckoning",
      genre: "Action, Thriller",
      duration: "2h 49m",
      rating: "TBD",
      description: "Ethan Hunt and his IMF team face their most dangerous mission yet involving a rogue AI known as the Entity.",
      poster: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      releaseDate: "May 23, 2026"
    },
    {
      id: 10,
      title: "Superman",
      genre: "Action, Adventure, Sci-Fi",
      duration: "2h 25m",
      rating: "TBD",
      description: "The journey of Superman reconciling his Kryptonian heritage with his human upbringing as Clark Kent in Smallville.",
      poster: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      releaseDate: "July 11, 2025"
    },
    {
      id: 11,
      title: "Jurassic World Rebirth",
      genre: "Action, Adventure, Sci-Fi",
      duration: "2h 15m",
      rating: "TBD",
      description: "A covert team races to secure genetic material from the planet's three most colossal dinosaur remnants.",
      poster: "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop",
      releaseDate: "July 2, 2025"
    }
  ]
};

// global variables
const ticketPrice = 10
let selectedMovie;
let selectedShowtime;
let selectedSeats = [];

// dom elements
const hamburger = document.querySelector('.menu-icon')
const navMenu = document.querySelector('.nav-menu')
const movieModal = document.querySelector('#movieModal')
const bookingModal = document.querySelector('#bookingModal')
const movieSearch = document.querySelector('#movieSearchBtn')

document.addEventListener('DOMContentLoaded', () =>{
    navHandler()
    loadMovies()
    setupEventListeners()
})
// setup navigation
function navHandler(){
hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
};

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', (e) =>{
     e.preventDefault()

     const target = document.querySelector(e.currentTarget.getAttribute('href'))

     if(target){
        target.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'start'
            }
        )
     }
    })

    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
})

// load movie into DOM
function loadMovies() {
    const nowShowingGrid = document.querySelector('#nowShowingGrid')
     const comingSoonGrid = document.querySelector('#comingSoonGrid')

     nowShowingGrid.innerHTML =moviesData.nowShowing.map( movie => createMovieCard(movie)).join('')
    comingSoonGrid.innerHTML =moviesData.comingSoon.map( movie => createComingSoonCard(movie)).join('')
       
     }


function createMovieCard(movie){
const starNum = Number(movie.rating)
const stars = '&#9733;'.repeat(Math.floor(starNum)/2) + '&#9734;'.repeat(5-Math.floor(starNum)/2)

    return`
    <div class="movie-card" onclick="openMovieModal(${movie.id})">
     <div class="movie-poster">
     <img src="${movie.poster}" alt="${movie.title}">
     <div class="movie-overlay"> </div>
     </div>
    <div class="movie-info"> 
    <h3> ${movie.title} </h3>
    <p> ${movie.genre}</p>
    <div class = "movie-rating"> 
    <span class="rating-stars"> $(stars)</span>
    <span class="rating-text"> $(movie.ratings)</span>
    </div>
    <p class="movie-description"> ${movie.description} </p>
    </div>
    </div>
    `
}

function createComingSoonCard(movie){

    return`
    <div class="movie-card" onclick="openMovieModal(${movie.id})">
     <div class="movie-poster">
     <img src="${movie.poster}" alt="${movie.title}">
     <div class="movie-overlay"> </div>
     </div>
    <div class="movie-info"> 
    <h3> ${movie.title} </h3>
    <p> ${movie.genre}</p>
    <div class = "movie-rating"> 
    <span class="rating-text">coming ${movie.releaseDate} </span>
    </div>
    <p class="movie-description"> ${movie.description} </p>
    </div>
    </div>
    `
}

// eventListeners
function setupEventListeners() {

    document.querySelector('.close').addEventListener('click',closeMovieModal)
    document.querySelector('.close')[1].addEventListener('click',closeBookingModal)

    window.addEventListener('click',function(event) {
        if(event.target === movieModal){
            closeMovieModal()
        }
        if(event.target === bookingModal){
            closeBookingModal()
        }
    });

    // movie search
    movieSearch.addEventListener('input',function () {
    filterMovies(this.value)
    })

    document.querySelector('movieSearchBtn').addEventListener('click',function(){
        filterMovies(movieSearch.value)
    })

    // cta btn
    document.querySelector('.cta-btn').addEventListener('click',function(){
        document.getElementById('movie').scrollIntoView({behavior:'smooth'})
    })

    document.getElementById('bookTicket')
}

function openMovieModal(movieId) {
    const movie = moviesData.nowShowing.find(m =>m.id==movieId)
    if (!movie) return
    selectedMovie = movie
    
document.querySelector('#modalPoster').src = movie.poster
document.querySelector('#modalTitle').innerText = movie.title
document.querySelector('#modalGenre').innerText = movie.genre
document.querySelector('#modalDuration').innerText = movie.duration
document.querySelector('#modalRating').innerText = movie.rating
document.querySelector('#modalDescription').innerText = movie.description


// create showtime btn
const showtimeButtons = document.querySelector('#showtimeButtons')

showtimeButtons.innerHTML = movie.showtimes.map(time =>
    `<button class="showtime-btn" onClick="selectShowtime('}${time}')">${time} </button>`
).join('')

movieModal.style.display = 'block'
}

function closeMovieModal() {
    movieModal.style.display = 'none'
    selectedMovie = null
}

// select showtime
function selectShowtime(time){
    selectShowtime = time;
    openMovieModal();
}

function openBookingModal(){
    if(!selectedMovie || !selectedShowtime) return;

    document.querySelector('#bookingMovieTitle').innerText = selectedMovie.title
    document.querySelector('#bookingshowtime').innerText = `$(selectshowtime)-$(selectedMovie.duration)`

    generateSeatingChart()
    updateBookingSummary()

    bookingModal.style.display ='flex'
}

function closeBookingModal (){
    bookingModal.style.display = 'none';
    selectedSeats = []
    selectedShowtime = null;
}

// seating chart
function generateSeatingChart(){
    const seatingChart = document.getElementById('seatingChart')
    const rows = 8;
    const seatsPerRow = 10;

    let seatHTML =''

    for(let row = 0; row < rows; row++){
        for(let seat =0; seat< seatsPerRow; seat++){
            const seatId = `${String.fromCharCode(65+row)}${seat + 1}`
            const isOccupied = Math.random() < 0.3;
            const seatClass = isOccupied ?  'occupied' : 'avilable'

            seatHTML +=`
            <div class="seat ${seatClass}"
            data-seat ="${seatId}"
            onClick ="selectSeat('${seatId}')">
            ${seatId}
            </div>
            `
        }
    }

    seatingChart.innerHTML = seatHTML
}

function selectSeat(seatId) {
  const seatElement = document.querySelector(`[data-seat="${seatId}"]`)

  if(seatElement.classList.contains('occupied')){
    return;
  }

  if(seatElement.classList.contains('selected')){
    seatElement.classList.remove('selected')
    seatElement.classList.add('available')

    selectedSeats = selectedSeats.filter(seat => seat !== seatId)
  } else{
    seatElement.classList.remove('available')
    seatElement.classList.add('selected')

    selectedSeats.push(seatId);
  }

  updateBookingSummary()
}

function updateBookingSummary(){
  const selectedSeatsDisplay = document.querySelector('#selectedSeatsDisplay')
  const totalPrice = document.querySelector('#totalPrice')
  const bookTicketsBtn = document.querySelector('#bookTicketBtn')

  if(selectedSeats.length > 0){
    selectedSeatsDisplay.innerText = selectedSeats.join(',')
    totalPrice.innerText = (selectedSeats.length * ticketPrice).toFixed(2)
    bookTicketsBtn.disabled = false
  } else{
    selectedSeatsDisplay.innerText ='none';
    totalPrice.innerText = '0.00';
    bookTicketsBtn.disabled = true
  }
}

// BOOK TICKET
function bookTickets(){
  const confirmation = confirm(
    'confirm booking for:'+ '\n'+
    'Movie:'+selectedMovie+'\n'+
    'Showtime:'+selectedShowtime+'\n'+
    'Seats:'+selectedSeats.join(',')+'\n'+
    'Total:$'+(selectedSeats.length * ticketPrice).toFixed(2)
  )

  if(confirmation) {
    alert('Tickets booked sucessfully! check your mail for booking receipt!')
    closeBookingModal()
  }
}

// Filter MOvies by search
function filterMovies(searchInput){
  const movieCards = document.querySelectorAll('.movie-card')

  movieCards.forEach(card =>{
    const title = card.querySelector('.movie-title').textContent.toLowerCase()
    const genre = card.querySelector('.movie-genre').textContent.toLowerCase()

    if (title.includes(searchInput.toLowerCase()) ||genre.includes(searchInput.toLowerCase())) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none'
    }
  })
}