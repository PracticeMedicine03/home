function downloadUrl(string) {
    fetch(string)
        .then(resp => resp.status === 200 ? resp.blob() : Promise.reject("INFO: Something went wrong, check the script."))
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display  = 'none';
            a.href = url;
            a.download = 'pmu.zip';
            document.body.appendChild(a);
            window.URL.revokeObjectURL(url);
            print("Downloading file...");
        })
        .catch(() => alert('oh crap'));
}

function downloadbuttPress() {
    downloadUrl("https://practicemedicine03.github.io/home/repo/pmu/downloads");
}