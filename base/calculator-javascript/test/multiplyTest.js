describe("function logic.multiply", function() {

    it("call function logic.multiply with args memoryNumber = 10, countNumber = 23 and return 230", function () {
        const a = 10;
        const b = 23;
        const exp = 230;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 0, countNumber = 45 and return 0", function () {
        const a = 0;
        const b = 45;
        const exp = 0;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 67, countNumber = 0 and return 0", function () {
        const a = 67;
        const b = 0;
        const exp = 0;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 1.1, countNumber = 8.9 and return 9.79", function () {
        const a = 1.1;
        const b = 8.9;
        const exp = 9.79;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 2.3, countNumber = 4.5 and return 10.35", function () {
        const a = 2.3;
        const b = 4.5;
        const exp = 10.35;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 0, countNumber = 0 and return 0", function () {
        const a = 0;
        const b = 0;
        const exp = 0;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = -32, countNumber = 45 and return  -1440", function () {
        const a = -32;
        const b = 45;
        const exp =  -1440;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = -32, countNumber = 45 and return  1440", function () {
        const a = -32;
        const b = -45;
        const exp =  1440;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 0.9, countNumber = 0.3 and return  0.27", function () {
        const a = 0.9;
        const b = 0.3;
        const exp =  0.27;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 8.9, countNumber = 0.3 and return  2.67", function () {
        const a = 8.9;
        const b = 0.3;
        const exp =  2.67;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = -8, countNumber = -0.3 and return  2.4", function () {
        const a = -8;
        const b = -0.3;
        const exp =  2.4;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 8, countNumber = 3 and return  24", function () {
        const a = 8;
        const b = 3;
        const exp =  24;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 0.5, countNumber = 3 and return  1.5", function () {
        const a = 0.5;
        const b = 3;
        const exp =  1.5;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 8, countNumber = 3 and return  0.3391972", function () {
        const a = 0.25;
        const b = 1.356789;
        const exp =  0.3391972;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 0.9545, countNumber = 1.356789 and return  1.2950551", function () {
        const a = 0.9545;
        const b = 1.356789;
        const exp =  1.2950551;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function logic.multiply with args memoryNumber = 2.123456789, countNumber = 1.9876543 and return  4.2206980175", function () {
        const a = 2.123456789;
        const b = 1.9876543;
        const exp =  4.2206980;
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });
    it("call function logic.multiply with args memoryNumber = 'dasdasd', countNumber = 1 and return 'false'", function () {
        const a = 'dasdasd';
        const b = 1;
        const exp = 'false';
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });
    it("call function logic.multiply with args memoryNumber = 1, countNumber = 'aaaaa' and return 'false'", function () {
        const a = 1;
        const b = 'aaaaa';
        const exp = 'false';
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });
    it("call function logic.multiply with args memoryNumber = 'dsd', countNumber = 'aaaaa' and return 'false'", function () {
        const a = 'dsd';
        const b = 'aaaaa';
        const exp = 'false';
        const act = logic.multiply(a, b);

        assert.equal(act, exp);
    });
    it("call function logic.multiply without args return 'false'", function () {
        const exp = 'false';
        const act = logic.multiply();

        assert.equal(act, exp);
    });
});