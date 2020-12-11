pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        bat 'npm run ng build'
      }
    }

    stage('deploy') {
      steps {
        bat 'XCopy dist\\ C:\\inetpub\\wwwroot\\dist\\'
      }
    }

  }
}  
