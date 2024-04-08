const constants = {};

constants.DATA_DIR = "./data";
constants.RAW_DIR = constants.DATA_DIR + "/raw"
constants.DATASET_DIR = constants.DATA_DIR + "/dataset"
constants.SAMPLE_JSON = constants.DATA_DIR + "/sample.json"
constants.PATH_DIR = constants.DATASET_DIR + "/paths"
constants.IMG_DIR = constants.DATASET_DIR + "/img"
constants.SAMPLES_JS = "./data/sample.js"

const fs = require("fs");
const { createCanvas } = require('canvas')
const draw = require("../mlcommon/draw");
const utils = require("../mlcommon/utils");

const canvas = createCanvas(400, 400)


let id = 1;
const samples = [];

const fnArr = fs.readdirSync(constants.RAW_DIR)

fnArr.forEach((fn) => {
  let data = fs.readFileSync(constants.RAW_DIR + "/" + fn);
  data = JSON.parse(data);
  const { student, drawings } = data;

  for (let label in drawings) {
    const sampleObj = {
      id,
      student,
      label
    }
    samples.push(sampleObj);
    fs.writeFileSync(constants.PATH_DIR + "/" + `${id}.json`, JSON.stringify(drawings[label]))

    drawImg(
      constants.IMG_DIR+`/${id}.png`,
      drawings[label]
    );
    utils.displayProgress(id, fnArr.length*8) // each file contains 8 drawings
    id++;
  }
  if (id == 10) return
})

function drawImg(outImgFile, path) {
  let ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  draw.createPaths(ctx, path)
  const buffer = canvas.toBuffer("image/png")

  fs.writeFileSync(outImgFile, buffer)
}

fs.writeFileSync(constants.SAMPLE_JSON, JSON.stringify(samples))
fs.writeFileSync(constants.SAMPLES_JS, `const samples = ${JSON.stringify(samples)};`)
