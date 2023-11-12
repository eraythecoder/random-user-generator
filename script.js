// API'den rastgele bir kullanıcıyı getiren fonksiyon
function fetchUser() {
  // Yükleme esnasında spinner göster
  showSpinner();

  // API'den kullanıcı verisini getir
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      
      // Yükleme bitince spinner gizle
      hideSpinner();

      // Getirilen kullanıcı verisini ekranda göster
      displayUser(data.results[0]);
    });
}

// Kullanıcı bilgilerini DOM'a aktarma
function displayUser(user) {

  const userDisplay = document.querySelector("#user");

  // Cinsiyete göre renk atama
  if (user.gender === "female") {
    document.body.style.backgroundColor = "violet";
  } else {
    document.body.style.backgroundColor = "lightblue";
  }

  userDisplay.innerHTML = `<div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Ad: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">E-posta: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Telefon: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Konum: </span> ${user.location.city} ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Yaş: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>`;
}

// Yükleme animasyonu
function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}

// Yükleme animasyonu
function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}

// Tıklama işlevini tanımlama
document.querySelector("#generate").addEventListener("click", fetchUser);

// Başlatıcı
fetchUser();
