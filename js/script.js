(function () {
  "use strict";

  // ---------- Helper ----------
  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function waLink(pesan) {
    const teks = encodeURIComponent(pesan || SITE.waPesanDefault);
    return `https://wa.me/${SITE.waNumber}?text=${teks}`;
  }

  // ---------- Header / kontak dinamis dari SITE ----------
  document.getElementById("waHeaderBtn").href = waLink();
  document.getElementById("waCtaBtn").href = waLink();
  document.getElementById("waFloat").href = waLink();
  const emailLink = document.getElementById("emailLink");
  emailLink.href = "mailto:" + SITE.email;
  emailLink.textContent = SITE.email;
  document.getElementById("footerLokasi").textContent = SITE.lokasi;
  document.getElementById("tahun").textContent = new Date().getFullYear();

  // ---------- Stat strip ----------
  const statStrip = document.getElementById("statStrip");
  STATS.forEach((s) => {
    const li = el("li");
    li.innerHTML = `<span class="stat-num">${s.angka}</span><span class="stat-label mono">${s.label}</span>`;
    statStrip.appendChild(li);
  });

  // ---------- Ticket renderer ----------
  function renderTicket(item, kategori) {
    const t = el("article", "ticket");

    const head = el("div", "ticket-head");
    head.innerHTML = `<span class="ticket-cat">${kategori}</span><span class="stamp">${item.status}</span>`;
    t.appendChild(head);

    const body = el("div", "ticket-body");
    let bodyHtml = `<h3>${item.nama}</h3>`;
    if (item.subjudul) bodyHtml += `<div class="ticket-subjudul">${item.subjudul}</div>`;
    bodyHtml += `<p class="ticket-ringkas">${item.ringkas}</p>`;
    body.innerHTML = bodyHtml;
    t.appendChild(body);

    t.appendChild(el("div", "ticket-perforation"));

    const listSource = item.fitur || item.isi;
    if (listSource) {
      const ul = el("ul", "ticket-list");
      listSource.forEach((f) => ul.appendChild(el("li", null, f)));
      t.appendChild(ul);
    }

    if (item.cocokUntuk) {
      t.appendChild(el("p", "ticket-cocok", "Cocok untuk: " + item.cocokUntuk));
    }

    if (item.stack) {
      const meta = el("div", "ticket-meta");
      item.stack.forEach((s) => meta.appendChild(el("span", "tag mono", s)));
      t.appendChild(meta);
    }

    const foot = el("div", "ticket-foot");
    const priceOrLabel = item.harga
      ? `<span class="ticket-price">${item.harga}</span>`
      : `<span class="ticket-price">Studi kasus</span>`;
    foot.innerHTML = `${priceOrLabel}<a class="ticket-link" href="${item.link}">Tanya soal ini →</a>`;
    t.appendChild(foot);

    return t;
  }

  function renderGrid(containerId, items, kategori) {
    const grid = document.getElementById(containerId);
    items.forEach((item) => grid.appendChild(renderTicket(item, kategori)));
  }

  renderGrid("templateGrid", TEMPLATES, "Template Website");
  renderGrid("appGrid", APPS, "Aplikasi Bisnis");
  renderGrid("ebookGrid", EBOOKS, "Ebook Panduan");

  // ---------- Proses kerja ----------
  const prosesList = document.getElementById("prosesList");
  PROSES.forEach((p, i) => {
    const li = el("li");
    li.innerHTML = `<span class="proses-num mono">0${i + 1}</span><div class="proses-label">${p.label}</div><p class="proses-detail">${p.detail}</p>`;
    prosesList.appendChild(li);
  });

  // ---------- Nav mobile ----------
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // ---------- Scroll reveal untuk ticket ----------
  const tickets = document.querySelectorAll(".ticket");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    tickets.forEach((t) => io.observe(t));
  } else {
    tickets.forEach((t) => t.classList.add("in-view"));
  }
})();
