const expect = require("chai").expect;
const navd = require("./index");

describe("navd", () => {
    describe("up", () => {
        it("should fail without 'steps' parameter", () => {
            expect(() => navd.up(null, "dir/")).to.throw(TypeError);
        });
        it("should fail without 'filepath' parameter", () => {
            expect(() => navd.up(0, null)).to.throw(TypeError);
        });
        it("should stay in dir/", () => {
            expect(navd.up(0, "dir/")).to.equal("dir/");
        });
        it("should move up one directory and into dir/", () => {
            expect(navd.up(1, "dir/")).to.equal("../dir/");
        });
    });
});