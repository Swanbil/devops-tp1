pipeline {
  agent any
    environment {
        CI = 'true'
    }
    
  stages {     
    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
          sh 'npm config ls'
        }
        sh 'ls'
        sh 'cd client;npm install'
      }
    }  
    stage('Test') {
      steps {  
        echo 'Test'
      }
    }
  }
}
