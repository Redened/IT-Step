$(document).ready(function () {
  const student1 = {
    name: "გიორგი",
    image: "../../Assets/img1.jpg",
    age: 12,
    registrationDate: "2019/01/22",
    courseType: "პროგრამირება",
    attendance: 100,
    scholarship: true,
  };

  const student2 = {
    name: "ვახტანგი",
    image: "../../Assets/img2.jpg",
    age: 20,
    registrationDate: "2019/01/22",
    courseType: "ფსიქოლოგია",
    attendance: 100,
    scholarship: false,
  };

  const student3 = {
    name: "გიორგი",
    image: "../../Assets/img3.jpg",
    age: 21,
    registrationDate: "2019/01/22",
    courseType: "პროგრამირება",
    attendance: 95,
    scholarship: true,
  };

  const student4 = {
    name: "გოდერძი",
    image: "../../Assets/img4.jpg",
    age: 22,
    registrationDate: "2020/09/22",
    courseType: "პროგრამირება",
    attendance: 60,
    scholarship: true,
  };

  const student5 = {
    name: "ვიღაცა",
    image: "../../Assets/img5.jpg",
    age: 22,
    registrationDate: "2019/01/22",
    courseType: "ფსიქოლოგია",
    attendance: 50,
    scholarship: false,
  };

  const student6 = {
    name: "მარიამი",
    image: "../../Assets/img6.jpg",
    age: 19,
    registrationDate: "2022/08/12",
    courseType: "ფსიქოლოგია",
    attendance: 100,
    scholarship: false,
  };

  const student7 = {
    name: "ელენე",
    image: "../../Assets/img7.jpg",
    age: 21,
    registrationDate: "2012/08/22",
    courseType: "პროგრამირება",
    attendance: 85,
    scholarship: true,
  };

  const student8 = {
    name: "ნიკა",
    image: "../../Assets/img8.jpg",
    age: 18,
    registrationDate: "2020/09/22",
    courseType: "ფსიქოლოგია",
    attendance: 80,
    scholarship: false,
  };

  const student9 = {
    name: "გიორგი",
    image: "../../Assets/img9.jpg",
    age: 22,
    registrationDate: "2022/08/22",
    courseType: "ფსიქოლოგია",
    attendance: 100,
    scholarship: true,
  };

  const student10 = {
    name: "ნიკა",
    image: "../../Assets/img10.jpg",
    age: 10,
    registrationDate: "2020/09/22",
    courseType: "ფსიქოლოგია",
    attendance: 90,
    scholarship: true,
  };

  const students = [
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
    student8,
    student9,
    student10,
  ];


  for (let constant = 0; constant < students.length; constant++) {
    let attendance = (students[constant].attendance == 100) ? "წარმატებული" : '';
    let scholarship = (students[constant].scholarship == true) ? "სტიპენდიატი" : '';

    let card = `
      <div class="card" data-name="${students[constant].name}" data-age="${students[constant].age}" data-reg="${students[constant].registrationDate}" data-course="${students[constant].courseType}" data-attend="${students[constant].attendance}" data-scholar="${students[constant].scholarship}">
      <img src="../../Assets/img${constant}.jpg" height="200" class="card-img-top" alt="${constant}">
      <div class="card-body">
        <h5 class="card-title"><b>${students[constant].name}</b></h5>
        <p class="card-text">ასაკი: <b>${students[constant].age}</b> <br /> კურსი: <b>${students[constant].courseType}</b> <br /> რეგისტრირებული: <b>${students[constant].registrationDate}</b></p>
        <span style="color: green">${attendance}</span>
        <span style="color: blue">${scholarship}</span>
      </div>
      </div>`;
    $(".div1").append(card);
  }


  $('.name').click(function() {
    $('.card').addClass('hidden');
    $('.card[data-name="გიორგი"]').removeClass('hidden')
  })

  $('.age').click(function() { 
    $('.card').addClass('hidden');
    $('.card[data-age="22"]').removeClass('hidden')
  });

  $('.course').click(function() { 
    $('.card').addClass('hidden')
    $('.card[data-course="პროგრამირება"]').removeClass('hidden')
  });

  $('.registration').click(function() { 
    $('.card').addClass('hidden')
    $('.card[data-reg="2020/09/22"]').removeClass('hidden')
  });

  $('.attendance').click(function() { 
    $('.card').addClass('hidden')
    $('.card[data-attend="100"]').removeClass('hidden')
  });

  $('.scholarship').click(function() { 
    $('.card').addClass('hidden')
    $('.card[data-scholar="true"]').removeClass('hidden')
  });

  $('.all').click(function() { 
    $('.card').removeClass('hidden')
  });
});
