define(["require", "exports", "./Circle", "./Triangle"], function (require, exports, circle, triangle) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function drawAllShapes(shapeToDraw) {
        shapeToDraw.draw();
    }
    drawAllShapes(new circle.Circle());
    drawAllShapes(new triangle.Triangle());
});
//# sourceMappingURL=TestShape.js.map