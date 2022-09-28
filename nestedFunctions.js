function A(x) {
    function B(y) {
        function C(z) {
            return (x * y * z)
            
        }
        return C
    }
    return B
}
console.log(A(5)(8)(3))