Tambahkan Perubahan ke Staging Area

Setelah Anda melakukan perubahan, tambahkan file atau folder yang telah diubah ke staging area dengan perintah:



Run
Copy code
git add .
Perintah ini akan menambahkan semua perubahan. Jika Anda hanya ingin menambahkan folder tertentu, Anda bisa menggunakan:




Run
Copy code
git add nama_folder/
Buat Commit dengan Pesan Deskriptif

Setelah menambahkan perubahan, buat commit dengan pesan yang menjelaskan perubahan yang telah Anda buat:




Run
Copy code
git commit -m "Pesan deskriptif tentang perubahan"
Dorong Perubahan ke Repositori di GitHub

Terakhir, dorong perubahan ke repositori GitHub Anda dengan perintah:
git push origin master



Run
Copy code
git push origin master
Jika Anda menggunakan branch lain, ganti master dengan nama branch yang sesuai.
Verifikasi Perubahan di GitHub
Setelah melakukan push, buka repositori Anda di GitHub untuk memastikan bahwa folder dan file yang diperbarui telah berhasil diunggah.
