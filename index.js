// Task 1
const arr = [1, 2, 3, 4, 5];
function multiplyArray([first, ...rest], num, callback) {
    const res = [first * num, ...rest.map(item => item * num)];
    callback(res);
    return res;
}
const arrrrrrrrr = (rat) => alert(rat);
multiplyArray(arr, 3, arrrrrrrrr);

// Task 2
function logItems(array) {
    array.forEach((item, index) => {
      console.log(`${index + 1} - ${item}`);
    });
  }
  logItems(["Mango", "Poly", "Ajax"]);

// Task 3
// const userLog = ["Mark", "beta@gmail.com", "Beta@321"];
// let owName = prompt("Введіть ваше ім'я:");
// let accountMail = prompt("Введіть свою пошту:");
// let password = prompt("Введіть пароль:");
// const [savedName, savedMail, savedPassword] = userLog;
// const checkName = owName === savedName;
// const checkMail = accountMail === savedMail;
// const checkPas = password === savedPassword;
// if (checkName && checkMail && checkPas) {
//     alert("Ви війшли в акаунт");
// } else {
//     alert("Повторіть спробу");
// }

// Task 4
function findBestEmployee(workers) {
    let maxTasks = 0;
    let bestEmployee = "";
  
    for (let [name, tasks] of Object.entries(workers)) {
      // Деструктуруємо на кожній ітерації
      const [employeeName, taskCount] = [name, tasks];
      if (taskCount > maxTasks) {
        maxTasks = taskCount;
        bestEmployee = employeeName;
      }
    }
  
    return bestEmployee;
  }
  
  let workers = {
    Dima: 11,
    Tima: 12,
    Max: 9,
  };
  
  console.log(findBestEmployee(workers));
  