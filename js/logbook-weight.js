// here are the declartion codes that neccessary to be able to process other code
(() => {
    const listElement = document.getElementById('weight');
    const newItem = document.getElementById('weightItem');
    const addBtn = document.getElementById('addBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Add an item to the list
    function addItem(item) {
      const itemElement = document.createElement('li');
      itemElement.textContent = item;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      itemElement.appendChild(deleteButton);
      deleteButton.addEventListener('click', ev => {
        listElement.removeChild(itemElement);
      });
      listElement.appendChild(itemElement);
    };

    // populate the list from an array
    function clearList() {
      listElement.innerHTML = "";
    }

    //  Clear the list
    function clearList() {
      while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
      }
    }
      // To clear the whole list we add an event listener to the clear button.
      clearBtn.addEventListener('click', ev => {
        clearList();
      });

      function renderList(list) {
        list.forEach(item => {
          addItem(item);
        });
      }
      // adds a handler for the input element keyup event
      newItem.addEventListener("keyup", ev => {
        if (ev.key === "Enter") {
          addBtn.click();
        }
      });

      // button code to add data
      addBtn.addEventListener('click', ev => {
        newItem.value.split(',').forEach(v => {
          if (v) {
            addItem(v);
          }
        });
        newItem.value = null;
      });

      // Saving data for later use
      window.addEventListener('beforeunload', ev => {
        const items = [...listElement.childNodes];
        if (items.length) {
          const list = items.map(item => {
            return item.textContent.slice(0, -1);
          });
          localStorage.setItem('workout-list', list);
        } else {
          localStorage.removeItem('workout-list');
        }
      });
})()
