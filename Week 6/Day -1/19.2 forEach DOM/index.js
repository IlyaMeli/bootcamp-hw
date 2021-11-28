const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const ol = document.createElement("ol");
ol.style.listStyleType = "none";
for (var i = 0; i < users.length; i++) {
  var li = document.createElement("li");
  li.setAttribute("data-id", users[i].id);
  li.innerHTML = users[i].firstName + " " + users[i].lastName;
  ol.appendChild(li);
}
document.body.appendChild(ol);
