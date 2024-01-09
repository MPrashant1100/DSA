function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b);
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if (ar[i] === ar[i + 1]) {
            pairs++;
            i++; // Move to the next pair directly
        }
    }

    return pairs;
}

