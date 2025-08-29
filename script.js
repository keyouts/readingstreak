   const streakKey = 'readingStreak';
    const streakDisplay = document.getElementById('streakCount');

    function loadStreak() {
      const streak = localStorage.getItem(streakKey);
      streakDisplay.textContent = streak ? streak : '0';
    }

    function incrementStreak() {
      let current = parseInt(localStorage.getItem(streakKey)) || 0;
      current++;
      localStorage.setItem(streakKey, current);
      streakDisplay.textContent = current;
    }

    function resetStreak() {
      localStorage.setItem(streakKey, 0);
      streakDisplay.textContent = '0';
    }

    loadStreak();