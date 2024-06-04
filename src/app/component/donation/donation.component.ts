import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DonationService } from '../../donation.service';
import { response } from 'express';
import { error } from 'console';
import { Donation } from '../../donation';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import jsPDF from 'jspdf';

declare var Razorpay: any;

@Component({
  selector: 'app-donation',
  standalone: true,
  templateUrl: './donation.component.html',
  imports: [FormsModule, CommonModule, FormsModule],
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    // Implement any necessary initialization here
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const donationData = form.value;
      const amount = donationData.amount;  // Extract the amount value
      console.log('Donation Data:', donationData);
      console.log('Donation Amount:', amount);

      this.donationService.createTransaction(amount).subscribe(
        (response) => {
          console.log(response);
          this.openTransactionModel(response, form);
        },
        (error) => console.log(error),
      );

    } else {
      console.log('Form is invalid');
    }
  }

  openTransactionModel(response: any, form: NgForm) {
    if (!response.transactionKey) {
      console.error('No key passed');
      return;
    }
    var options = {
      order_id: response.order_id,
      key: response.transactionKey,
      amount: response.amount,
      currency: response.currency,
      name: 'GlobTpf',
      description: "GlobTpf NGO",
      image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      handler: (response: any) => {
        if (response.razorpay_payment_id != null && response != null) {
          this.processResponse(response, form);
        } else {
          alert("Payment failed!")
        }
      },
      prefill: {
        name: form.value.name,
        email: form.value.email,
        contact: form.value.contact,
      },
      notes: {
        address: form.value.address,
      },
      theme: {
        color: '#5fc77b'
      }
    }
    var razorpayObj = new Razorpay(options);
    razorpayObj.open();
  }

  rozarpay_payment_id: string = "";

  processResponse(resp: any, form: NgForm) {
    console.log(resp.razorpay_payment_id);
    this.saveDonation(form, resp);
    // Here you have to pass function that stores data in the database with (form)
  }

  donation: Donation = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    address: '',
    pannumber: '',
    amount: 0,
    payment_id: ''
  }

  saveDonation(form: NgForm, resp: any) {
    if (form.valid) {
      const newDonation: Donation = {
        name: form.value.fullName,
        phone: form.value.contactNumber,
        email: form.value.email,
        address: form.value.fullAddress,
        pannumber: form.value.panNumber,
        amount: form.value.amount,
        payment_id: resp.razorpay_payment_id // Change response to resp
      };

      this.donationService.saveDonationDetails(newDonation).subscribe(response => {
        this.generatePDF(newDonation, response);
        console.log('Donation saved:', response);
        console.log(response.id);
        this.sendThankYouEmail(newDonation); // Send thank you email after saving the donation
        form.reset(); // Reset form after successful submission
      }, error => {
        console.error('Error saving donation:', error);
      });
    }
  }


  sendThankYouEmail(donation: Donation) {


    const emailParams = {
      user_name: donation.name,
      user_email: donation.email,
      message: `Thank you for your generous donation of ${donation.amount}. Your support helps us continue our mission.`,
    };
    // console.log(donation.email);
    // console.log(donation.name);

    emailjs.send('service_y58wz8l', 'template_2gkxf3k', emailParams, 'XzrY-_DP0kaNNqu_F')
      .then((result: EmailJSResponseStatus) => {
        console.log('Email successfully sent:', result.text);
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  }



  generatePDF(donation: Donation, response: any) {
    // Initialize jsPDF
    const pdfDoc = new jsPDF();

    // Define styles
    const titleStyle = { fontSize: 18, fontStyle: 'bold', textAlign: 'center' };
    const labelStyle = { fontSize: 12, fontStyle: 'bold' };
    const contentStyle = { fontSize: 12 };

    // Add content to the PDF
    pdfDoc.setFontSize(titleStyle.fontSize);
    pdfDoc.setFillColor(255, 0, 0); // Set fill color to red
    pdfDoc.text('GlobTpf', 20, 20)// Set text color to red

    pdfDoc.setFontSize(labelStyle.fontSize);
    pdfDoc.text('Om sai nivas,Vichumbe, Navi Mumbai', 100, 20); // Position address details on the right side
    pdfDoc.text('Maharashtra', 100, 30);
    pdfDoc.text('E-Mail: globtechpowerfoundation@gmail.com', 100, 40);
    pdfDoc.line(20, 50, 190, 50); // Draw a horizontal line

    pdfDoc.setFontSize(titleStyle.fontSize);
    pdfDoc.text('Donation Receipt', 105, 70, { align: 'center' });

    pdfDoc.setFontSize(labelStyle.fontSize);
    pdfDoc.text('Receipt Number:', 20, 80);
    pdfDoc.text('Date:', 20, 90);
    pdfDoc.text('Received with thanks from:', 20, 100);
    pdfDoc.text('Address of Donor:', 20, 110);
    pdfDoc.text('Email-id of Donor:', 20, 120);
    pdfDoc.text('Contact No. of Donor:', 20, 130);
    pdfDoc.text('Donation amout.:', 20, 140);
    pdfDoc.text('In words:', 20, 150);
    pdfDoc.text('By mode of:', 20, 160);
    pdfDoc.text('Eligible for deduction\'s Section:', 20, 170);
    pdfDoc.text('Our Income Tax Unique Registration No.:', 20, 180);

    pdfDoc.setFontSize(contentStyle.fontSize);
    pdfDoc.text(response.id.toString(), 100, 80);
    pdfDoc.text(new Date().toLocaleDateString(), 100, 90);
    pdfDoc.text(donation.name, 100, 100);
    pdfDoc.text(donation.address, 100, 110);
    pdfDoc.text(donation.email, 100, 120);
    pdfDoc.text(donation.phone, 100, 130);
    pdfDoc.text('Rs. ' + donation.amount + '/-', 100, 140);
    pdfDoc.text(this.convertNumberToWords(donation.amount) + " Only", 100, 150);
    pdfDoc.text('Online', 100, 160);
    pdfDoc.text('Section 35(1)(ii)', 100, 170);
    pdfDoc.text('ABCDEFGHIJKLMNP', 100, 180);

    // Add Terms & Conditions section
    pdfDoc.setFontSize(labelStyle.fontSize);
    pdfDoc.text('Terms & Conditions', 20, 200); // Position the title

    pdfDoc.setFontSize(contentStyle.fontSize);
    pdfDoc.text('1. Cheques/DD is subject to realization', 20, 210);
    pdfDoc.text('2. Our Registration No.: XYZ_required', 20, 220);
    pdfDoc.text('For Glob TechPower Foundation', 20, 230);

    pdfDoc.setFontSize(labelStyle.fontSize);
    pdfDoc.text('Authorized Signatory', 180, 250, { align: 'right' }); // Position the signatory

    // Save the PDF
    pdfDoc.save('donation_receipt.pdf');

  }
  convertNumberToWords(amount: number): string {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const scales = ['', 'Thousand', 'Million', 'Billion'];

    const numToWords = (num: number): string => {
      if (num === 0) return 'Zero';

      let words = '';
      for (let i = 0; num > 0; i++) {
        if (num % 1000 !== 0) {
          words = helper(num % 1000) + scales[i] + ' ' + words;
        }
        num = Math.floor(num / 1000);
      }
      return words.trim();
    };

    const helper = (num: number): string => {
      let result = '';
      if (num >= 100) {
        result += units[Math.floor(num / 100)] + ' Hundred ';
        num %= 100;
      }
      if (num >= 11 && num <= 19) {
        return result + teens[num - 10] + ' ';
      } else if (num === 10 || num >= 20) {
        return result + tens[Math.floor(num / 10)] + ' ' + units[num % 10] + ' ';
      } else if (num > 0) {
        return result + units[num] + ' ';
      }
      return result;
    };


    return numToWords(amount);
  }

}
