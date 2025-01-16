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
  <h2>Notes</h2>
  
  <div class="notesContainer" id="session1">
    <div class="session-header" onclick="toggleNotes('session1')">Session 1</div>
    <p class="summary">In which the characters met, killed some rats, and promptly went to bed (also measurements)</p>
    <div class="note-details">
      <div class="NPCs">
        <h3>NPCs</h3>
        <ul>
          <li>Hal: other barkeep, got beat up, terrified of rats</li>
          <li>Eli: barkeep, twin of hal. Quietish, competent</li>
          <li>Samson: halfing exterminator friend</li>
        </ul>
      </div>
      <div class="Encounters">
        <h3>Encounters</h3>
        <ul>
          <li>RATS: decimated</li>
          <li>Tumbleweed</li>
          <li>Goblins: 3 goblins planning to sacifrice samson, successfully captured and interrogated</li>
        </ul>
      </div>
      <div class="generalNotes">
        <h3>Misc</h3>
        <ul>
          <li>We're shrinkers not growers</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="notesContainer" id="session2">
    <div class="session-header" onclick="toggleNotes('session2')">Session 2</div>
    <p class="summary">In which we missed 4 weeks and forgot what was happening, heathe became a chainsmoker, and the tumbleweeds remain at large</p>
    <div class="note-details">
      <div class="NPCs">
        <h3>NPCs</h3>
        <ul>
          <li>Gabby: cheerful shop keep, go to for transporation</li>
          <li>Sanguine: overzealous deputy, arragont</li>
        </ul>
      </div>
      <div class="Encounters">
        <h3>Encounters</h3>
        <ul>
          <li>will add</li>
        </ul>
      </div>
      <div class="generalNotes">
        <h3>Misc</h3>
        <ul>
          <li>Burnt down my house</li>
          <li>Burnt down my house</li>
          <li>Burnt down my house</li>
        </ul>
      </div>
    </div>
  </div>
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

<script>
  function toggleNotes(noteId) {
    const noteContent = document.getElementById(noteId);
    const details = noteContent.querySelector('.note-details');
  
    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'flex';
    } else {
      details.style.display = 'none';
    }
  }
</script>
