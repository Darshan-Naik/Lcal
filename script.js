function calculateLove() {
  let name1 = document.querySelector(".name1").value;
  let name2 = document.querySelector(".name2").value;
  name1 = name1.toLowerCase();
  name2 = name2.toLowerCase();
  if (!name1.length) {
    document.querySelector(".name1").placeholder = "Please enter name";
    return;
  }
  if (!name2.length) {
    document.querySelector(".name2").placeholder = "Please enter name";
    return;
  }

  // 97-122 a-z
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < name1.length; i++) {
    num1 += name1[i].charCodeAt() - 96;
  }

  for (let i = 0; i < name2.length; i++) {
    num2 += name2[i].charCodeAt() - 96;
  }

  let result = num1 + num2;
  //   let random = Math.random() * result;
  let maxout = name1.length * name2.length;

  const final = Math.round(result + maxout) % 100;

  document.querySelector(".resultText").innerHTML = `${final}%`;
}
