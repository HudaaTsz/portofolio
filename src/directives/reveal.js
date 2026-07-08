// Directive v-reveal: menambahkan class "reveal" lalu "show" saat elemen
// masuk viewport. Styling class-nya ada di src/style.css (global).
export const reveal = {
  mounted(el) {
    el.classList.add('reveal')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    io.observe(el)
  }
}
