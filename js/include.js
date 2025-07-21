document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error("File not found");
      const html = await res.text();
      el.innerHTML = html;
    } catch (e) {
      el.innerHTML = "<p class='text-red-500'>Component failed to load.</p>";
    }
  });
});
    