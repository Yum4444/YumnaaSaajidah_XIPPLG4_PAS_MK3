// Daftar pertanyaan beserta jawaban dan status kebenarannya
const pertanyaan = [
    {
        pertanyaan: "Berikut fakta tentang Brendan Eich kecuali...",
        jawaban: [
            
                { text: "Karyawan Netscape", correct: false},
                { text: "Co-Founder Mozilla", correct: false},
                { text: "Memiliki control penuh atas Chrome", correct: true},
                { text: "Penemu Java Script", correct: false},
            
        ]
    },
    {
        pertanyaan: "Apa itu DOM dalam konteks Javascript?",
        jawaban: [
            
                { text: "Data Object Model", correct: false},
                { text: "Document Object Model", correct: true},
                { text: "Document Order Model", correct: false},
                { text: "Data Order Model", correct: false},
            
        ]
    },
    {
        pertanyaan: "Bagaimana cara mendeklarasikan variabel dalam JS?",
        jawaban: [
            
                { text: "declare variable namaVariabel;", correct: false},
                { text: "variable namaVariabel;", correct: false},
                { text: "var namaVariabel;", correct: true},
                { text: "variable = namaVariabel;", correct: false},
            
        ]
    },
    {
        pertanyaan: "Apa tujuan utama JavaScript dalam pengembangan web?",
        jawaban: [
            
                { text: "Membuat kopi secara otomatis", correct: false},
                { text: "Menyusun daftar belanja", correct: false},
                { text: "Membuat halaman web interaktif", correct: true},
                { text: "Menulis resep makanan", correct: false},
            
        ]
    },
    {
        pertanyaan: "Apa yang dimaksud dengan HTML?",
        jawaban: [
            
                { text: "HyperText Markup Language", correct: true},
                { text: "Bahasa HyperLink dan Teks", correct: false},
                { text: "HyperTransfer Markup Language", correct: false},
                { text: "HyperLink dan Teks Markup Language", correct: false},
            
        ]
    },
    {
        pertanyaan: "Apa fungsi dari elemen HTML tag em?",
        jawaban: [
            
                { text: "Menyisipkan gambar", correct: false},
                { text: "Mengatur teks menjadi tebal", correct: false},
                { text: "Membuat teks miring", correct: true},
                { text: "Menyusun daftar", correct: false},
            
        ]
    },
    {
        pertanyaan: "Apa yang dilakukan oleh atribut colspan dalam elemen HTML tag td?",
        jawaban: [
            
                { text: "Menentukan warna latar belakang", correct: false},
                { text: "Mengatur lebar kolom", correct: false},
                { text: "Menggabungkan sel kanan", correct: false},
                { text: "Menentukan jumlah sel yang digabung dalam satu baris", correct: true},
            
        ]
    },
    {
        pertanyaan: "Apa fungsi dari tag html head?",
        jawaban: [
            
                { text: "Menampilkan teks besar", correct: false},
                { text: "Mengatur head dokumen", correct: false},
                { text: "Menyimpan informasi tentang dokumen", correct: true},
                { text: "Menyisipkan gambar", correct: false},
            
        ]
    },
    {
        pertanyaan: "Apa singkatan dari CSS?",
        jawaban: [
            
                { text: "Computer Style Sheets", correct: false},
                { text: " Counter Strike: Source", correct: false},
                { text: "Cascading Style Sheets", correct: true},
                { text: "Colorful Style Sheets", correct: false},
            
        ]
    },
    {
        pertanyaan: "Apa fungsi dari atribut class dalam HTML saat digunakan dengan CSS?",
        jawaban: [
            
                { text: "Menentukan warna teks", correct: false},
                { text: "Menambahkan hyperlink", correct: false},
                { text: "Menggabungkan sel ke kanan", correct: false},
                { text: "Menentukan kelompok elemen yang akan di styling", correct: true},
            
        ]
    },
    {
        pertanyaan: "Bagaimana cara menyertakan CSS eksternal di dalam halaman HTML?",
        jawaban: [
            
                { text: "Dengan menggunakan tag style", correct: false},
                { text: "Dengan menggunakan atribut style pada setiap elemen", correct: false},
                { text: "Dengan menggunakan tag link dan atribut href yang merujuk ke file CSS", correct: true},
                { text: "Dengan menyisipkan CSS langsung di dalam elemen HTML menggunakan tag css", correct: false},
            
        ]
    },
    {
        pertanyaan: "Apa kegunaan property margin dalam CSS?",
        jawaban: [
            
                { text: "Mengatur warna latar belakang", correct: false},
                { text: "Menentukan lebar elemen", correct: false},
                { text: "Mengontrol jarak luar elemen dari elemen lain", correct: true},
                { text: "Menyusun daftar elemen", correct: false},
            
        ]
    }


];

const pertanyaanElement = document.getElementById("pertanyaan"); // Element untuk menampilkan pertanyaan
const answerButtons = document.getElementById("button-jawaban"); // Element untuk menampilkan jawabannya
const nextButton = document.getElementById("next-btn"); // button untuk melanjutkan ke pertanyaan berikutnya atau menampilkan skor pengguna 

// Variabel untuk indeks pertanyaan saat ini dan skor
let currentPertanyaanIndex = 0;
let score = 0;


// Fungsi untuk memulai quizz
function startQuiz(){
    currentPertanyaanIndex = 0;
    score = 0;
    nextButton.innerHTML = "Lanjut";
    showPertanyaan();
}

// Fungsi untuk menampilkan pertanyaan saat ini
function showPertanyaan(){
    resetState();
    let currentPertanyaan = pertanyaan[currentPertanyaanIndex];
    let pertanyaanNo = currentPertanyaanIndex + 1;
    pertanyaanElement.innerHTML = pertanyaanNo + ". " + currentPertanyaan.pertanyaan;

    // Membuat button jawaban dan menambahkannya ke kontainer
    currentPertanyaan.jawaban.forEach(jawaban => {
        const button = document.createElement("button");
        button.innerHTML = jawaban.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(jawaban.correct){
            button.dataset.correct = jawaban.correct; // Menandai jawaban yang benar dengan dataset
        }
        button.addEventListener("click", selectAnswer); // Menambahkan event listener untuk menangani pemilihan jawaban
    });
}

// Fungsi untuk mengembalikan keadaan awal (reset)
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Fungsi untuk menangani pemilihan jawaban
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct"); // Menandai jawaban yang benar atau salah dengan CSS
        score++;
    }else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"; // Menampilkan button lanjut
}

// Fungsi untuk menampilkan skor akhir quizz user
function showScore() {
    resetState();
    pertanyaanElement.innerHTML = `You scored ${score} out of ${pertanyaan.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", backToHome);
}

// Fungsi untuk kembali ke halaman awal/rule quizz
function backToHome() {
    window.location.href = "index.html";
}



// Fungsi untuk menghandle button "Lanjut"
function handleNextButton(){
    currentPertanyaanIndex++;
    if(currentPertanyaanIndex < pertanyaan.length){ // Menampilkan pertanyaan berikutnya atau skor akhir jika pertanyaan sudah habis
        showPertanyaan();
    }else{
        showScore();
    }
}



// Menambahkan event listener untuk button "Lanjut"
nextButton.addEventListener("click", () =>{
    if(currentPertanyaanIndex < pertanyaan.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); // Memulai quizz saat halaman dimuat