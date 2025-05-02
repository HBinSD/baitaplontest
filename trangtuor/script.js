function goToPost(tourId) {
    // Giả lập chuyển trang sang bài viết tương ứng
    // Trong thực tế bạn có thể thay bằng đường link thật
    const tourLinks = {
      "hanoi-1ngay": "baiviet/hanoi-1ngay.html",
      "hanoi-3ngay": "baiviet/hanoi-3ngay.html",
      "hanoi-hatay": "baiviet/hanoi-hatay.html",
      "pho-co": "baiviet/pho-co.html"
    };
  
    if (tourLinks[tourId]) {
      window.location.href = tourLinks[tourId];
    } else {
      alert("Bài viết chưa có!");
    }
  }
  