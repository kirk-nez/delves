---
layout: stage1.njk
---  

# DND Page

<div class="flex DnD">

## Characters
  <div id="char1" class="char-content">
    <div class="char-header" onclick="toggleDetails('char1')">
      Heathe Grates
    </div>
    <div class="char-details">
      <ul>
      <li>Class: Ranger</li>
      <li>Race: Minotaur</li> 
      <li>Backstory:</li>
      [etc etc]
      <a href="placeholder">sheet PDF</a>
      </ul>
    </div>
  </div>

  <div id="char2" class="char-content">
    <div class="char-header" onclick="toggleDetails('char2')">
      Lubey
    </div>

  <div class="char-details">
      <ul>
      <li>Class:</li>
      <li>Race:</li> 
      <li>Backstory:</li> 
      [etc etc]
      <a href="placeholder">sheet PDF</a>
      </ul>
  </div>
  </div>
</div>

---

<div class="flex DnD">

## Notes

- Session 1: blah blah blah  
- Session 2: blah bleeh blah  


</div>

---

<div class="DnD">

## Art Section

<p class="filler">Nothing for now ^-^</p>
</div>

---

<script>
  function toggleDetails(charId) {
    const charContent = document.getElementById(charId);
    const details = charContent.querySelector('.char-details');
  
    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block'; // Show details
    } else {
      details.style.display = 'none'; // Hide details
    }
  }
</script>
