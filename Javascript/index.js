// Load Lesson
const loadLesson = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      displaylesson(json.data);
    });
};

// Load Word
const loadWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayLoadWord(data.data));
};

// Display Load Lesson
const displaylesson = (lessons) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";

  lessons.forEach((lesson) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <button onclick = "loadWord(${lesson.level_no})" class="mb-1.5 btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
    `;
    lessonContainer.append(newDiv);
  });
};

// Display Load Word
const displayLoadWord = (words) => {
  const wordLessonSelect = document.getElementById("word-lesson-select");
  wordLessonSelect.innerHTML = "";

  words.forEach((word) => {
    const cardWord = document.createElement("div");
    cardWord.innerHTML = `
        <div class="bg-white text-center max-w-[547px] p-12 rounded-2xl">
          <h2 class="text-3xl font-bold">${word.word}</h2>
          <p class="mt-3 mb-6 font-medium">Meaning / Pronounciation</p>
          <h1 class="hind-siliguri-font font-medium mb-15 text-3xl">"${word.meaning} / ${word.pronunciation}"</h1>
          <div class="flex justify-between items-center">
            <button class="bg-[#E8F4FF] hover:bg-[#1A91FF50] cursor-pointer p-3 rounded-lg flex justify-center items-center"><i class="fa-solid text-xl fa-circle-info"></i></button>
            <button class="bg-[#E8F4FF] hover:bg-[#1A91FF50] p-3 rounded-lg flex cursor-pointer justify-center items-center"><i class="fa-solid fa-volume-high"></i></button>
          </div>
        </div>
    `;
    wordLessonSelect.append(cardWord)
  });
};

loadLesson();
