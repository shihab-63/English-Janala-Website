// Load Lesson
const loadLesson = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      displaylesson(json.data);
    });
};

// Remove All Button
const removeButton = () => {
  const lessonBtn = document.querySelectorAll(".lesson-btn");
  lessonBtn.forEach((btn) => btn.classList.remove("active"));
};

// Load Word
const loadWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      removeButton();
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      clickBtn.classList.add("active");
      displayLoadWord(data.data);
    });
};

// Display Load Lesson
const displaylesson = (lessons) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";

  lessons.forEach((lesson) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <button  id = "lesson-btn-${lesson.level_no}" onclick = "loadWord(${lesson.level_no})" class="mb-1.5 btn btn-outline btn-primary lesson-btn">
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

  if (words.length === 0) {
    wordLessonSelect.innerHTML = `
        <div class="col-span-full text-center py-8 space-y-4 md:space-y-6">
            <img src="./assets/alert-error.png" alt="" class="mx-auto">
            <p class="text-gray-500 text-lg md:text-xl hind-siliguri-font">আপনি এখনো কোন Lesson Select করেননি</p>
            <h1 class="text-2xl md:text-4xl font-bold">একটি Lesson Select করুন।</h1>
        </div>
    `;
    return;
  }

  words.forEach((word) => {
    const cardWord = document.createElement("div");
    cardWord.innerHTML = `
        <div class="bg-white text-center max-w-[547px] p-10 md:p-12 rounded-2xl">
          <h2 class="text-2xl md:text-3xl font-bold">${
            word.word ? word.word : "শব্দ পাওয়া যাইনাই"
          }</h2>
          <p class="mt-3 mb-6 font-normal md:font-medium">Meaning / Pronounciation</p>
          <h1 class="hind-siliguri-font font-medium mb-10 md:mb-15 text-2xl md:text-3xl">"${
            word.meaning ? word.meaning : "শব্দ পাওয়া যাইনাই"
          } / ${
      word.pronunciation ? word.pronunciation : "শব্দ পাওয়া যাইনাই"
    }"</h1>
          <div class="flex justify-between items-center">
            <button class="bg-[#E8F4FF] hover:bg-[#1A91FF50] cursor-pointer p-3 rounded-lg flex justify-center items-center"><i class="fa-solid text-xl fa-circle-info"></i></button>
            <button class="bg-[#E8F4FF] hover:bg-[#1A91FF50] p-3 rounded-lg flex cursor-pointer justify-center items-center"><i class="fa-solid fa-volume-high"></i></button>
          </div>
        </div>
    `;
    wordLessonSelect.append(cardWord);
  });
};

loadLesson();
