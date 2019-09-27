'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_CLOUD = 10;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var GISTO_HEIGHT = 150;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 115, 30);
  ctx.fillText('Список результатов:', 115, 50);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_CLOUD, CLOUD_Y + GAP_CLOUD, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  this.console.log(players);
  this.console.log(times);
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP + GISTO_HEIGHT + GAP);
    var sekunda = Math.floor(times[i] / 100);
    var raznica = GISTO_HEIGHT - ((barHeight * times[i]) / maxTime);

    ctx.fillText(sekunda, CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + FONT_GAP + raznica + TEXT_WIDTH + FONT_GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(255, 100%, ' + Math.random() * 100 + '%)';
    }


    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP + TEXT_WIDTH + raznica, BAR_WIDTH, ((barHeight * times[i]) / maxTime) - FONT_GAP);
  }
};
