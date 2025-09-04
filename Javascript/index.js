// Load Lesson
const loadLesson = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      displaylesson(json.data);
    });
};

// Show display
const displaylesson = (lessons) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  
  lessons.forEach((lesson) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <button class="mb-1.5 btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
    `;
    lessonContainer.append(newDiv);
  });
};

loadLesson();
