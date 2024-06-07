export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(vector2) {
        return new Vector2(this.x + vector2.x, this.y + vector2.y);
    }
    minus(vector2) {
        return new Vector2(this.x - vector2.x, this.y - vector2.y);
    }
    scaled(by) {
        return new Vector2(this.x * by, this.y * by);
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    toString() {
        return "<" + x + ", " + y + ">";
    }
    toList() {
        return [this.x, this.y];
    }
}