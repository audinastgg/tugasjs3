function hitungSuhu(suhu) {
    suhu = Number (document.getElementById('temperature').value)
    var from = document.getElementById('from').value
    var to = document.getElementById('to').value
    var hasil;

	if (from == getElementById('celcius')) {
            if (to == 'celcius'){
                hasil = suhu
            }else if (to == 'fahrenheit'){
                hasil = (suhu * 9/5)+32
            }else if (to == 'kelvin'){
                hasil = suhu + 273.15
            }
	} else if (from == getElementById('fahrenheit')) {
        if (to == 'celcius'){
            hasil = (suhu-32)*5/9
        }else if (to == 'fahrenheit'){
            hasil = suhu
        }else if (to == 'kelvin'){
            hasil = (suhu-32)*5/9 + 273.15
		}
	} else if (from == getElementById('kelvin')) {
		if (to == 'celcius'){
            hasil = (suhu-273.15)
        }else if (to == 'fahrenheit'){
            hasil = (suhu-273.15) * 9/5 + 32
        }else if (to == 'kelvin'){
            hasil = suhu
        }
    }
}

document.getElementById("hasil").onclick = hitungSuhu;
document.getElementById("temperature").innerHTML = hitungSuhu.suhu;
document.getElementById("hasil").innerHTML = hitungSuhu.hasil;
