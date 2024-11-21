const profile = {
  username: 'Jacob', // Початкове ім'я профілю
  playTime: 300, // Початковий час гри

  // Метод змінює ім'я профілю
  changeUsername(newName) {
    this.username = newName;
  },

  // Метод додає години до загального часу
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Метод повертає інформацію про профіль
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Початковий стан профілю
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// Зміна імені
profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

// Оновлення часу гри
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
