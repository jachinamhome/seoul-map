
function renderCard(info) {
  const card = document.createElement("div");
  card.className = "video-card";

  const sizeText = `${info.size}평 (${(info.size * 3.3058).toFixed(1)}㎡)`;
  const priceText = info.rent && info.rent !== 0
    ? `${formatDeposit(info.deposit)}/${info.rent}`
    : `${formatDeposit(info.deposit)}`;
  const station = info.station || "";
  const tags = (info.tags && info.tags.length > 0) ? info.tags.join(" · ") : "";
  const areaText = info.area + (info.area2 ? ' ' + info.area2 : '');

  card.innerHTML = `
    <div class="thumbnail">
      <img src="${getYoutubeThumbnail(info.url)}" alt="썸네일">
    </div>
    <div class="info">
      <div class="region">${areaText}</div>
      <div class="main-price">${info.contract} · ${priceText}</div>
      <div class="summary">${info.type} · ${sizeText}</div>
      <div class="station">${station}</div>
      <div class="tags">${tags}</div>
      <a class="btn" href="${info.url}" target="_blank">영상 보기</a>
    </div>
  `;

  return card;
}
