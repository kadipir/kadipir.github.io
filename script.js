document.getElementById('reserveButton').addEventListener('click', function() {
    document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reservation submitted! We will contact you soon.');
    this.reset();
});
