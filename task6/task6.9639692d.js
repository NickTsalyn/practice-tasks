var form=document.querySelector("#note-form"),input=document.querySelector("#note-input"),list=document.querySelector("#note-list"),storageKey="info";function onSubmit(e){e.preventDefault();var t=input.value.trim();if(""!==t){var n=document.createElement("li");n.textContent=t,list.appendChild(n),input.value="",localStorage.setItem(storageKey,JSON.stringify(n.value)),list.addEventListener("click",(function(e){"LI"===e.target.tagName&&e.target.remove()}))}}form.addEventListener("submit",onSubmit);var restoreData=function(){var e=localStorage.getItem(storageKey);if(e){var t=JSON.stringify(e);input.value=t.newItem}};
//# sourceMappingURL=task6.9639692d.js.map
