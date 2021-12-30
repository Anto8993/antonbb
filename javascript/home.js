
      let raf, x, y;

      document.addEventListener("pointermove", (e) => {
        x = (e.x / window.innerWidth - 0.5) * 2;
        y = (e.y / window.innerWidth - 0.5) * 2;
        raf = raf || requestAnimationFrame(setPos);
      });

      function setPos() {
        document.documentElement.style.setProperty("--x", x);
        document.documentElement.style.setProperty("--y", y);
        raf = null;
      }