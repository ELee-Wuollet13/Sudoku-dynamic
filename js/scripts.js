// var checker = [1, 2, 3, 4, 5, 6, 7, 8, 9]

document.write("<table border=1>")
for (row=1; row<=9; row++){
  document.write("<tr>")
  for (col=1; col<=9; col++){
    document.write("<td>R" + row + "<br>C" + col + "</td>")
  }
  document.write("</tr>")
}
document.write("</table>")
