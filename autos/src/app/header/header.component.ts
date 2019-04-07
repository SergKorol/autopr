import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {EnterService} from './enter.service';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModalConfig, NgbModal]
})


export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              private modalService: NgbModal,
              private config: NgbModalConfig,
              public enterService: EnterService,
              public authService: AuthService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  onSaveData() {
    this.dataStorageService.storeBrands().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }
  // onLogout() {
  //   this.enterService.logOut();
  // }
  onLoadData() {
    this.dataStorageService.getBrands();
  }
  onShowData() {
    this.dataStorageService.getBrands();
  }
  openReg(signup) {
    this.modalService.open(signup, { centered: true });
  }

  openEnter(signin) {
    this.modalService.open(signin, { centered: true });
  }

  // onSignup(form: NgForm) {
  //   const email = form.value.email;
  //   const pass = form.value.password;
  //   this.enterService.signUpUser(email, pass);
  // }
  //
  // onSignin(form: NgForm) {
  //   const email = form.value.email;
  //   const pass = form.value.password;
  //   this.enterService.signInUser(email, pass);
  // }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.signupUser(email, pass);
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.signinUser(email, pass);
  }
  onLogout() {
    this.authService.logout();
  }
}
