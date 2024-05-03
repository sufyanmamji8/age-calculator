document
  .getElementById("birthday-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById("birthdate").value);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthdate.getFullYear();

    const birthMonth = birthdate.getMonth();
    const birthDay = birthdate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age -= 1;
    }

    let nextBirthday = new Date(
      currentDate.getFullYear(),
      birthMonth,
      birthDay
    );
    if (nextBirthday < currentDate) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const timeDifference = nextBirthday - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("result").innerText = `Your age is: ${age} years.
    \nNext birthday in: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
  });
